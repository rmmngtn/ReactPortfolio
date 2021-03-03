import React from "react";
import Card from "../Card";
import Row from "../Row"; 
import "./style.css";

function Projects({ data }) { 
    console.log(data);
    return ( 
        <Row className="results">
            {data.map(project => ( 
                <Card key={project.id} 
                title={project.title}
                img={project.img}
                description={project.description}
                 />
            ))}
        </Row>
    );
}

export default Projects;

