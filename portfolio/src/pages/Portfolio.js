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
       
       
    ]
    
    
    
    return (
        <div className="portfolio">
            <Container style={{ minHeight: "80%"}} > 
            <h1>Portfolio</h1>
            <Projects data={portfolio} />
            </ Container>
        </div>
    );
}

export default Portfolio;
