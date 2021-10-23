import vesp from "./resources/vespertine.gif"
import cursing from "./resources/cursing.gif"
import scrapper from "./resources/new_scraper.gif"
import flappy from "./resources/flappy.gif"

export const skills = [
    "C/C++", "Java",
    "ReactJS", "Android Studio",
    "Flutter",
    "Python", "Tensroflow/Keras", "Unity"
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
        title: "Web scrapper",
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
        description: "A python script showing how a neural evolutionary network (NEAT) can be applied. We demonstrate the utility of the NEAT library with flappy bird created using pygame.",
        image_link: flappy,
        link: "https://github.com/SeanEvanss/flappy_bird_NEAT",
        key:3
    },
    
    
    
];

