import React from "react";
import Container from "../components/Container";
import Projects from "../components/Projects/projects";



function Portfolio() {
    const portfolio = [
        {   
            id: 1,
            title: "Burger Logger",
            img: "./img/screenshotBurg.png",
            description: "​This application uses multiple technologies to create burgers and sort them based on whether they've been devoured or not!" ,
            url: " https://fierce-forest-22712.herokuapp.com/",
            repo: "https://github.com/rmmngtn/13_Burger_NodeExpressHandlebars"

        },
        {   
            id: 2,
            title: "The Green Thumb",
            img: "./img/greenthumb.png",
            description: "​Users login to create their specific virtual garden, complete with pictures and information about each plant." ,
            url: "https://thegreenthumb.herokuapp.com/",
            repo: "https://github.com/rmmngtn/theGreenThumb"

        },
        {   
            id: 3,
            title: "Employee Directory",
            img: "./img/employee.png",
            description: "​This application provides a directory of employee information that can be searched and sorted by name." ,
            url: "https://rmmngtn.github.io/EmployeeDirectory/",
            repo: "https://github.com/rmmngtn/EmployeeDirectory"

        },
        {   
            id: 4,
            title: "Fitness Tracker",
            img: "./img/fitness.png",
            description: "​This application builds and tracks your workouts!" ,
            url: "https://young-taiga-06877.herokuapp.com/",
            repo: "https://github.com/rmmngtn/17_FitnessTracker"

        },
        {   
            id: 5,
            title: "Budget Tracker",
            img: "./img/budget.png",
            description: "​This application keeps track of your budget (even if your wifi goes out)!" ,
            url: "https://tranquil-brook-30884.herokuapp.com/",
            repo: "https://github.com/rmmngtn/18_BudgetTracker"

        },
        {   
            id: 6,
            title: "Note Taker",
            img: "./img/notes.png",
            description: "​​This project uses Express.js to take in and display user notes in JSON." ,
            url: "https://gentle-springs-17632.herokuapp.com/",
            repo: "https://github.com/rmmngtn/11_NoteTaker"

        },
       
       
    ]
    
    
    
    return (
        <div className="portfolio">
            <Container  > 
            <h1>Portfolio</h1>
            <Projects data={portfolio} />
            </ Container>
        </div>
    );
}

export default Portfolio;