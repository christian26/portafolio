import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import '../App.css';

const ProjectLists = () => (
    <div>
        <section className="product-list">
            <div className="project-border col-4">
                <img src="https://via.placeholder.com/280X380" alt="Project"/>
            </div>
            <div className="col-8">
                <h4>PROJECT TITLE</h4>
                <p>Lacus lectus pharetra nec sit accumsan anim ut aptent suscipit vel est laoreet 
                    pretium erat metus conubia mattis feugiat et pede sodales odio sed montes condimentum.
                </p>
                <p>Sollicitudin integer non commodo nunc  duis sed nulla egestas sapien  volutpat 
                    ullamcorper elit dolor urna, est etiam pellentesque mauris et venenatis ante, 
                    non placerat ut molestie quam in suspendisse 
                </p>
                <ul>
                    <li>Magna odio feugiat vivamus purus ornare </li>
                    <li>Odio nonummy sodales id nibh malesuada </li>
                    <li>Fringilla sapien vel maecenas orci amet </li>
                    <li>Urna semper vestibulum elit sit nunc elementum.</li>
                </ul>
            </div>            
        </section>
        <section className="product-list right-push">            
            <div className="col-8">
                <h4>PROJECT TITLE</h4>
                <p>Lacus lectus pharetra nec sit accumsan anim ut aptent suscipit vel est laoreet 
                    pretium erat metus conubia mattis feugiat et pede sodales odio sed montes condimentum.
                </p>
                <p>Sollicitudin integer non commodo nunc  duis sed nulla egestas sapien  volutpat 
                    ullamcorper elit dolor urna, est etiam pellentesque mauris et venenatis ante, 
                    non placerat ut molestie quam in suspendisse 
                </p>
                <ul>
                    <li>Magna odio feugiat vivamus purus ornare </li>
                    <li>Odio nonummy sodales id nibh malesuada </li>
                    <li>Fringilla sapien vel maecenas orci amet </li>
                    <li>Urna semper vestibulum elit sit nunc elementum.</li>
                </ul>
            </div>     
            <div className="project-border col-4">
                <img src="https://via.placeholder.com/280X380" alt="Project"/>
            </div>       
        </section>
    </div>
)

const Projects = () => (
    <div className="page-center">
        <NavBar/>
        <h1>Projects</h1>
        <p>Lorem ipsum dolor sit amet vestibulum lacus at consequat sollicitudin arcu tortor 
            enim hendrerit nam quis vestibulum commodo blandit ornare cum hendrerit tellus dis 
            pellentesque congue odio porttitor pellentesque rutrum sodales lobortis mi consequat 
            quis accumsan ut laoreet.
        </p>  
        <ProjectLists/>      
        <Footer/>
    </div>
)

export default Projects