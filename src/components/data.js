import vesp from "./resources/vespertine.gif"
import cursing from "./resources/cursing.gif"

export const skills = [
    "C/C++", "Java",
    "ReactJS", "Android Studio",
    "Flutter",
    "Python", "Tensroflow/Keras", "Unity"
];

export const projects = [
    {
        title: "Vespertine",
        subtitle: "Android",
        description: "A simple Android application consuming data.gov and Google API. Focused on nightlife functions such as displayng all neray taxis locations as well as parking lots left at all malls and public carparks",
        image_link: vesp,
        link: "https://github.com/SeanEvanss/Vespertine",
        key:0
    },
    {
        title: "Cursing detection",
        subtitle: "Python, Mediapipe",
        description: "A Python application taking advantage of the Mediapipe library. Can detect when a certain offensive gesture is made.",
        image_link: cursing,
        link: "https://github.com/SeanEvanss/Vespertine",
        key:1
    }
];

