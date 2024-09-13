const express = require("express");
const app = express();
const cors = require("cors");



bodyParser = require("body-parser");
uuid = require("uuid");
mongoose = require('mongoose'); 



mongoose.connect('mongodb+srv://zubairhasan90:Zubair99@cluster0.janhy2j.mongodb.net/myFlixdb');
const { check, validationResult } = require("express-validator");  
const Models = require('./models');
const Movies = Models.Movie;
const Users = Models.User;
 

app.use(cors());

app.use(bodyParser.json());


const auth = require("./auth")(app);
const passport = require("passport");

require("./passport");

//CREATE
app.post("/users",
  [check("Username", "Username is required").isLength({ min: 5 }),
  check("Username", "Username contains non alphanumeric characters - not allowed").isAlphanumeric(),
  check("Password", "Password is required").not().isEmpty(),
  check("Email", "Email does not appear to be valid").isEmail()],
  async (req, res) => {
  
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    let hashedPassword = Users.hashPassword(req.body.Password);

    await Users.findOne({ Username: req.params.Username })
      .then((user) => {
        if (user) {
          return res.status(400).send(req.body.Username + " already exists");
        } else {
          Users.create({
            Username: req.body.Username,
            Password: hashedPassword,
            Email: req.body.Email,
            Birthday: req.body.Birthday
          })
            .then((user) => { res.status(201).json(user) })
            .catch((error) => {
              console.error(error);
              res.status(500).send("Error: " + error);
            });
        }
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send("Error: " + error);
      });
  });
  
app.put('/users/:Username', passport.authenticate("jwt", { session: false }), async (req, res) => {
  if (req.user.Username !== req.params.Username) {
    return res.status(400).send("Permission denied");
  }
  await Users.findOneAndUpdate({ Username: req.params.Username }, {
    $set:
    {
      Username: req.body.Username,
      Password: req.body.Password,
      Email: req.body.Email,
      Birthday: req.body.Birthday
    }
  },
    { new: true }) // This line makes sure that the updated document is returned
    .then((updatedUser) => {
      res.json(updatedUser);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error: " + err);
    })

});


app.post('/users/:Username/movies/:MovieID', passport.authenticate("jwt", { session: false }), async (req, res) => {
  await Users.findOneAndUpdate({ Username: req.params.Username }, {
    $push: { FavoriteMovies: req.params.MovieID }
  },
    { new: true }) // This line makes sure that the updated document is returned
    .then((updatedUser) => {
      res.json(updatedUser);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error: " + err);
    });
});

//DELETE
app.delete('/users/:Username/movies/:MovieID', passport.authenticate("jwt", { session: false }), async (req, res) => {
  await Users.findOneAndUpdate({ Username: req.params.Username }, {
    $pull: { FavoriteMovies: req.params.MovieID }
  },
    { new: true }) // This line makes sure that the updated document is returned
    .then((updatedUser) => {
      res.json(updatedUser);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error: " + err);
    });
});

//DELETE
app.delete("/users/:userID", passport.authenticate("jwt", { session: false }), async (req, res) => {
  await Users.findByIdAndDelete({ _id: req.params.userID })
    .then((user) => {
      if (!user) {
        res.status(400).send(req.params.userID + ' was not found');
      } else {
        res.status(200).send(req.params.userID + ' was deleted.');
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});

app.get("/", (req, res) => {
  res.send("Welcome to Movie Flix App");
})

//READ 
app.get("/movies", async (req, res) => {
  await Movies.find()
    .then((movies) => {
      res.status(200).json(movies);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
})

//READ
app.get("/movies/:title", passport.authenticate("jwt", { session: false }), (req, res) => {
  // const title = req.params.title;
  const { title } = req.params; //object destructuring: creating a new variable, title (LH), which is equal to the property of the same name of the object on the RHS of = sign 
  //const movie = movies.find(movie => movie.Title === title); //three equal signs because title is a string

  Movies.findOne({ Title: title })
    .then((movie) => {
      if (movie) {
        res.status(200).json(movie); //to shut down function add return before res.status
      } else {
        res.status(400).send("no such movie")
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
})

//READ
app.get("/movies/genre/:genreName", passport.authenticate("jwt", { session: false }), (req, res) => {
  const { genreName } = req.params;

  Movies.findOne({ "Genre.Name": genreName })
    .then((movie) => {
      if (movie) {
        res.status(200).json(movie.Genre); //to shut down function add return before res.status
      } else {
        res.status(400).send("no such movie")
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
})


//READ
app.get("/movies/director/:directorName", passport.authenticate("jwt", { session: false }), (req, res) => {
  const { directorName } = req.params; //object destructuring

  Movies.findOne({ "Director.Name": directorName })
    .then((movie) => {
      if (movie) {
        res.status(200).json(movie.Director); //to shut down function add return before res.status
      } else {
        res.status(400).send("no such director")
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
})

//READ
app.get("/users", passport.authenticate("jwt", { session: false }), (req, res) => {
  Users.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
})

//Serving public folder
app.use(express.static("public"));
app.use(express.static("index"));


const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
  console.log(("Listening to Port " + port));
})
