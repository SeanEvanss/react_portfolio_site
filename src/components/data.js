import vesp from "./resources/vespertine.gif"
import cursing from "./resources/cursing.gif"
import scrapper from "./resources/new_scraper.gif"
import flappy from "./resources/flappy.gif"

import post1 from "./resources/background.jpeg"
import post2 from "./resources/post2.jpg"

export const skills = [
    "C/C++", "Java",
    "ReactJS", "NodeJS+Express",
    "MongoDB","Android Studio",
    "Flutter", "Python", 
    "Tensroflow/Keras", "Unity",
    "Spring Boot", "Flask",
];

export const projects = [
    {
        title: "Vespertine",
        subtitle: "Android Studio, Java",
        description: "An Android application consuming data.gov and Google API. Focused on nightlife functions such as displayng all nearby taxis locations as well as parking lots left",
        image_link: vesp,
        link: "https://github.com/SeanEvanss/Vespertine",
        key:0
    },
    {
        title: "Web scraper",
        subtitle: "NodeJS, ExpressJS, Axios",
        description: "A web scapper script I wrote using NodeJS that will be hooked into a database (eventually). Currently WIP.",
        image_link: scrapper,
        link: "https://github.com/SeanEvanss/nodejs_web_scrapper",
        key:1
    },
    {
        title: "Cursing detection",
        subtitle: "Python, Mediapipe",
        description: "A Simple Python application making use of the Mediapipe library. The script is able to detect when a certain offensive gesture is made.",
        image_link: cursing,
        link: "https://github.com/SeanEvanss/Cursing-finger-detection",
        key:2
    },
    {
        title: "NEAT Flappy bird",
        subtitle: "Python, pygame, NEAT",
        description: "A python script showing how a neural evolutionary network (NEAT) can be applied. We demonstrate the utility of the NEAT library with flappy bird created with pygame.",
        image_link: flappy,
        link: "https://github.com/SeanEvanss/flappy_bird_NEAT",
        key:3
    },            
];

//This will eventually be from a backend database
export const feedCards=[
    {
        title: "What's this page about",
        image: post1,
        upload_time:"13-01-2021 01:30am",
        description: "So why ruin a single page application with another page ? \n"
        +" Well I realised that I wanted an easy way to update people about what projects I'm currently working on for both software and non software projects."
        +" And since I don't want to annony my friends on facebook or twitter, figured I'd do it myself. \n \n So here you go.",
    },
    {
        title: "This has been a fun week...",
        image: post2,
        upload_time:"16-01-2021 04:54am",
        description: "This has been a fun week. \n"+
        "For those that are unaware, I have a few projects that I'm working on various platforms and one of these projects "+
        "requires the use of my 3D printr, except that I had not 1, not 2 but 3 points of failure on my ender3 printer (due to wear and tear). "+
        "I now have my main 3D project suddenly put on hold while I replace 1 major and 2 minor components.\n "+
        "Will share more pics on the upgrade process in the near future once they arrive."
    }

];

