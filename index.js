// const express = require ("express");
//       morgan = require("morgan");
//       fs = require ("fs")
//       path = require("path");

// const app = express();

// const accessLogStream = fs.createWriteStream(path.join(__dirname , "log.txt") , {flags: "a"}) 

// let newUser = [
//     {
//         id: 1, 
//         userName: "Ben" ,
//         favMovies: ["Saving Private Ryan"] 
//     },
    
//     {
//         id: 2,
//         userName: "Kavin",
//         favMovies: ["The Mask"] 
//     },

//     {
//         id: 3,
//         userName: "Hisham",
//         favMovies: ["Rush Hour 2"] 
//     },

//     {
//         id: 4,
//         userName: "Mustafa",
//         favMovies: ["Good Will Hunting"] 
//     },

//     {
//         id: 5,
//         userName: "Nathan",
//         favMovies: ["We Were Soldiers"] 
//     },
// ]

// let movies = [
//     {"Title": "Saving Private Ryan",
//      "Description": "Captain John Miller (Tom Hanks) takes his men behind enemy lines to find Private James Ryan, whose three brothers have been killed in combat. Surrounded by the brutal realties of war, while searching for Ryan, each man embarks upon a personal journey and discovers their own strength to triumph over an uncertain future with honor, decency and courage.",
//      "Genre":{
//         "Type": "Action",
//         "Description": "Movies in the action genre are fast-paced and include a lot of action like fight scenes, chase scenes, and slow-motion shots. They can feature superheroes, martial arts, or exciting stunts. These high-octane films are more about the execution of the plot rather than the plot itself." 
//      },
//      "Director":{
//         "Name": "Steven Spielberg",
//         "Born": "December 18, 1946 (age 76 years)"   
//      }
//     },   

//     {"Title": "Good Will Hunting",
//     "Description": "Will Hunting (Matt Damon) has a genius-level IQ but chooses to work as a janitor at MIT. When he solves a difficult graduate-level math problem, his talents are discovered by Professor Gerald Lambeau (Stellan Skarsgard), who decides to help the misguided youth reach his potential. When Will is arrested for attacking a police officer, Professor Lambeau makes a deal to get leniency for him if he will get treatment from therapist Sean Maguire (Robin Williams).",
//      "Genre":{
//         "Type": "Drama",
//         "Description": "The drama genre features stories with high stakes and many conflicts. They're plot-driven and demand that every character and scene move the story forward. Dramas follow a clearly defined narrative plot structure, portraying real-life scenarios or extreme situations with emotionally-driven characters."
//      },
//      "Director":{
//         "Name": "Gus Green Van Sant Jr.",
//         "Born": "July 24, 1952 (age 71 years)",
//      }     
//     },

//     {"Title": "Fight Club",
//     "Description": "A depressed man (Edward Norton) suffering from insomnia meets a strange soap salesman named Tyler Durden (Brad Pitt) and soon finds himself living in his squalid house after his perfect apartment is destroyed. The two bored men form an underground club with strict rules and fight other men who are fed up with their mundane lives. Their perfect partnership frays when Marla (Helena Bonham Carter), a fellow support group crasher, attracts Tyler's attention.",
//     "Genre":{
//         "Type": "Action",
//         "Description": "Movies in the action genre are fast-paced and include a lot of action like fight scenes, chase scenes, and slow-motion shots. They can feature superheroes, martial arts, or exciting stunts. These high-octane films are more about the execution of the plot rather than the plot itself." 
//      },
//      "Director":{
//         "Name": "David Andrew Leo Fincher",
//         "Born": "August 28, 1962 (age 61 years)",
//      }     
//     },
    
//     {"Title": "We Were Soldiers",
//     "Description": "Based upon the best-selling book 'We Were Soldiers Once and Young' by Lt. Gen. Harold G. Moore (Ret.) and journalist Joseph L. Galloway, this compelling war drama depicts the true story of the first major battle between the United States and North Vietnamese forces. It is a film about uncommon valor and nobility under fire, loyalty among soldiers, and the heroism and sacrifice of men and women both home and abroad.",
//     "Genre":{
//         "Type": "Action",
//         "Description": "Movies in the action genre are fast-paced and include a lot of action like fight scenes, chase scenes, and slow-motion shots. They can feature superheroes, martial arts, or exciting stunts. These high-octane films are more about the execution of the plot rather than the plot itself." 
//      },
//      "Director":{
//         "Name": "Randall Wallace",
//         "Born": "July 28, 1949 (age 74 years)",
//      }        
//     },

//     {"Title": "The Mask" ,
//     "Description": "When timid bank clerk Stanley Ipkiss (Jim Carrey) discovers a magical mask containing the spirit of the Norse god Loki, his entire life changes. While wearing the mask, Ipkiss becomes a supernatural playboy exuding charm and confidence which allows him to catch the eye of local nightclub singer Tina Carlyle (Cameron Diaz). Unfortunately, under the mask's influence, Ipkiss also robs a bank, which angers junior crime lord Dorian Tyrell (Peter Greene), whose goons get blamed for the heist.",
//     "Genre":{
//         "Type": "Comedy",
//         "Description": "Comedy films are films designed to elicit laughter from the audience. Comedies are light-hearted dramas, crafted to amuse, entertain, and provoke enjoyment. The comedy genre humorously exaggerates the situation, the language, action, and characters." 
//      },
//      "Director":{
//         "Name": "Charles Russell",
//         "Born": "May 9, 1958 (age 65 years)",
//      }        
//     },

//     {"Title": "Black Hawk Down",
//     "Description": "The film takes place in 1993 when the U.S. sent special forces into Somalia to destabilize the government and bring food and humanitarian aid to the starving population. Using Black Hawk helicopters to lower the soldiers onto the ground, an unexpected attack by Somalian forces brings two of the helicopters down immediately. From there, the U.S. soldiers must struggle to regain their balance while enduring heavy gunfire.",
//     "Genre":{
//         "Type": "Action",
//         "Description": "Action: Movies in the action genre are fast-paced and include a lot of action like fight scenes, chase scenes, and slow-motion shots. They can feature superheroes, martial arts, or exciting stunts. These high-octane films are more about the execution of the plot rather than the plot itself." 
//      },
//      "Director":{
//         "Name": "Sir Ridley Scott",
//         "Born": "November 30, 1937 (age 85 years)",
//      }       
//     },

//     {"Title": "Rush Hour 1",
//     "Description": "When a Chinese diplomat's daughter is kidnapped in Los Angeles, he calls in Hong Kong Detective Inspector Lee (Jackie Chan) to assist the FBI with the case. But the FBI doesn't want anything to do with Lee, and they dump him off on the LAPD, who assign wisecracking Detective James Carter (Chris Tucker) to watch over him. Although Lee and Carter can't stand each other, they choose to work together to solve the case on their own when they figure out they've been ditched by both the FBI and police.", 
//     "Genre":{
//         "Type": "Comedy",
//         "Description": "Comedy films are films designed to elicit laughter from the audience. Comedies are light-hearted dramas, crafted to amuse, entertain, and provoke enjoyment. The comedy genre humorously exaggerates the situation, the language, action, and characters."         
//      },
//      "Director":{
//         "Name": "Brett Ratner",
//         "Born": "March 28, 1969 (age 54 years)",
//      }       
//     },
    
//     {"Title": "Rush Hour 2" ,
//     "Description": "After an explosion at the US Embassy in Hong Kong kills two customs agents investigating currency smuggling, Inspector Lee (Jackie Chan) and James Carter (Chris Tucker) search for the mastermind. Ricky Tan (John Lone), head of the Fu-Cang-Long Triad, sends out his minions to insure that Carter and Lee don't solve the case.",
//     "Genre":{
//         "Type": "Comedy",
//         "Description": "Comedy films are films designed to elicit laughter from the audience. Comedies are light-hearted dramas, crafted to amuse, entertain, and provoke enjoyment. The comedy genre humorously exaggerates the situation, the language, action, and characters." 
//      },
//      "Director":{
//         "Name": "Brett Ratner",
//         "Born": "March 28, 1969 (age 54 years)",
//      }      
//     },

//     {"Title": "Rush Hour 3" ,
//     "Description": "East meets West again when the assassination of Ambassador Han leads to the reunion of Lee (Jackie Chan) and Carter (Chris Tucker). In Paris, the pair must stay one step ahead of Chinese gangsters, and Lee's childhood friend (Hiroyuki Sanada), as they track down an envelope containing the identity of a powerful crime lord.",
//     "Genre":{
//         "Type": "Comedy",
//         "Description": "Comedy films are films designed to elicit laughter from the audience. Comedies are light-hearted dramas, crafted to amuse, entertain, and provoke enjoyment. The comedy genre humorously exaggerates the situation, the language, action, and characters." 
//      },
//      "Director":{
//         "Name": "Brett Ratner",
//         "Born": "March 28, 1969 (age 54 years)",
//      }       
//     },
   
//     {"Title": "21 Jump Street" ,
//      "Description": "When cops Schmidt (Jonah Hill) and Jenko (Channing Tatum) join the secret Jump Street unit, they use their youthful appearances to go under cover as high-school students. They trade in their guns and badges for backpacks, and set out to shut down a dangerous drug ring. But, as time goes on, Schmidt and Jenko discover that high school is nothing like it was just a few years earlier -- and, what's more, they must again confront the teenage terror and anxiety they thought they had left behind.",
//      "Genre":{
//         "Type": "Comedy",
//         "Description": "Comedy films are films designed to elicit laughter from the audience. Comedies are light-hearted dramas, crafted to amuse, entertain, and provoke enjoyment. The comedy genre humorously exaggerates the situation, the language, action, and characters." 
//      },
//      "Director":{
//         "Name": ["Philip Anderson Lord" , "Christopher Robert Miller"],
//         "Born": ["July 12, 1975 (age 48)" , "September 23, 1975 (age 48)"]
//      }       
//     },     
// ];

// //Get Requests
// app.get("/" , (req , res) => {
//     res.send("Welcome to myFlix!");
// });

// app.get("/movies" , (req , res) => {
//     res.json(movies);
// });

// //Listen for Requests
// app.listen(8080 , () => {
//     console.log("Your app is listening on port 8080");
// }); 

// //setup logger
// app.use(morgan("combined" , {stream: accessLogStream}));

// //Serving public folder
// app.use(express.static("public"));

// //Error
// app.use((err , req , res , next) => {
//     console.error(err.stack);
//     res.status(8080).send("Something Broke!");
// });