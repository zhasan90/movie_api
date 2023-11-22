const express = require ("express");
      morgan = require("morgan");
      fs = require ("fs")
      path = require("path");

const app = express();

const accessLogStream = fs.createWriteStream(path.join(__dirname , "log.txt") , {flags: "a"})


let topTenMovies = [
    {title: "Saving Private Ryan",
     genre: "Action , War"   
    },

    {title: "Goodwill Hunting",
     genre: "Drama"    
    },

    {title: "Fight Club",
     genre: "Action"   
    },
    
    {title: "We Were Soldiers",
     genre: "Action , War"   
    },

    {title: "The Mask" ,
     genre: "Comedy"   
    },

    {title: "BlackHawk Down",
     genre: "Action , War"   
    },

    {title: "Rush Hour 1",
     genre: "Action , Comedy"   
    },
    
    {title: "Rush Hour 2" ,
     genre: "Action , Comedy"   
    },

    {title: "Rush Hour 3" ,
     genre: "Action , Comedy"   
    },
   
    {title: "21 Jump Street" ,
     genre: "Action , Comedy"   
    },     
];

//Get Requests
app.get("/" , (req , res) => {
    res.send("Welcome to myFlix!");
});

app.get("/movies" , (req , res) => {
    res.json(topTenMovies);
});

//Listen for Requests
app.listen(8080 , () => {
    console.log("Your app is listening on port 8080");
}); 

//setup logger
app.use(morgan("combined" , {stream: accessLogStream}));

//Serving public folder
app.use(express.static("public"));

//Error
app.use((err , req , res , next) => {
    console.error(err.stack);
    res.status(8080).send("Something Broke!");
});