import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import SocialIcons from './SocialIcons'
import '../App.css';
import bg from '../bg.jpg';

const Hello = () => (
    <section className="hello-section">
        <div className="hello-box">
            <p>Hello!</p>
            <h3>I'M CHRISTIAN</h3>
            <p>Front-end.back-end.so.fullstack</p>
        </div>
        <img src={bg} alt="Programme" />
    </section>
)

const WhoAmI = () => (
    <section className="who-am-i-section">
        <div className="col-6">
            <h3>WHO I AM</h3>
            <p>Lorem ipsum dolor sit amet vestibulum lacus at consequat sollicitudin arcu tortor enim hendrerit 
                nam quis vestibulum commodo blandit ornare cum hendrerit tellus dis pellentesque congue odio 
                porttitor pellentesque rutrum sodales lobortis mi consequat quis accumsan ut laoreet.
            </p>
            <div className="col-6">
                <p>Interdum urna nulla iaculis elit eget am ornare lectus mauris ac auctor risus mi eleifend. 
                    Non tincidunt sed dolor ante bibendum lacus nulla at neque at maecenas ligula. Sodales  
                    tellus semper risus pulvinar.
                </p>
                <button>DOWNLOAD RESUME</button>
            </div>
            <hr/>
            <div className="col-6">
                <p>Name: Your Name</p>
                <p>Date of birth: Days / Month / Year</p>
                <p>Nationality: Country name</p>
                <p>Address: Write your address</p>
                <p>Phone: (123) - 456 - 7890</p>
                <p>Email: mail@demolink.org</p> 
                
                <SocialIcons/>                         
            </div>            
        </div>        
    </section>
)

const Experiences = () => (
    <section className="experiences-section">
        <h3>Experiences</h3>
        <p>Lorem ipsum dolor sit amet vestibulum lacus at consequat sollicitudin arcu tortor enim 
            hendrerit nam quis vestibulum commodo blandit ornare cum hendrerit tellus dis pellentesque 
            congue odio porttitor pellentesque rutrum sodales lobortis mi consequat quis accumsan ut laoreet. 
        </p>
        <div className="history">
            <section>
                <p>JOB TITLE</p>
                <p>Company Name - 2015 - Current</p>
                <p>Lorem ipsum dolor sit amet vestibulum lacus pellentesque rutrum sodales 
                    lobortis mi consequat quis accumsan ut laoreet.
                </p>                
            </section>
            <section>
                <p>JOB TITLE</p>
                <p>Company Name - 2015 - Current</p>
                <p>Lorem ipsum dolor sit amet vestibulum lacus pellentesque rutrum sodales 
                    lobortis mi consequat quis accumsan ut laoreet.
                </p>                
            </section>
            <section>
                <p>JOB TITLE</p>
                <p>Company Name - 2015 - Current</p>
                <p>Lorem ipsum dolor sit amet vestibulum lacus pellentesque rutrum sodales 
                    lobortis mi consequat quis accumsan ut laoreet.
                </p>                
            </section>
        </div>
    </section>
)

const Projects = () => (
    <section className="projects-section">
        <h3>Projects</h3>
        <p>Lorem ipsum dolor sit amet vestibulum lacus at consequat sollicitudin arcu tortor 
            enim hendrerit nam quis vestibulum commodo blandit ornare cum hendrerit tellus dis 
            pellentesque congue odio porttitor pellentesque rutrum sodales lobortis mi consequat 
            quis accumsan ut laoreet.
        </p>
        <ul className="project-lists">
            <li className="project-item"><img src="https://via.placeholder.com/212X270" alt="Project"/></li>
            <li className="project-item"><img src="https://via.placeholder.com/212X270" alt="Project"/></li>
            <li className="project-item"><img src="https://via.placeholder.com/212X270" alt="Project"/></li>
            <li className="project-item"><img src="https://via.placeholder.com/212X270" alt="Project"/></li>
            <li className="project-item"><img src="https://via.placeholder.com/212X270" alt="Project"/></li>
            <li className="project-item"><img src="https://via.placeholder.com/212X270" alt="Project"/></li>
        </ul>
        <button>More</button>
    </section>
)

const Home = () => (    
    <div className="page-center">
        <NavBar/>
        <Hello/>
        <WhoAmI/>
        <Experiences/>
        <Projects/>
        <Footer/>
    </div>
)

export default Home