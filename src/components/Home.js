import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import SocialIcons from './SocialIcons'
import styled from 'styled-components'
import '../App.css';
import bg from '../bg.jpg';

const HelloBg = styled.section`
    ${props => props.mainTitle &&`
        height: 100vh;
        position: relative;
        background-image: url(${bg});
        background-position: center;
        background-size: cover;
    `}

`;
const P = styled.p`
    ${props => props.noMargin &&`
        margin:0;
        font-weight: 500;
    `}
    ${props => props.italic &&`
        font-style: italic;        
    `}
`;
const HelloBlock = styled.section`    
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-40%);
    color: white;
    border: 1px solid white;
    padding: 60px 40px;
    text-align: center;
    text-transform: uppercase;
    width: 60%;
    h3 {
        font-size: 35px;
        margin: 20px 0 10px;
    }    
`;

const Hello = () => (
    <HelloBg mainTitle>
        <HelloBlock>
            <P italic noMargin>Hello!</P>
            <h3>I'm Christian Rodriguez</h3>
            <P noMargin>Front-end && Back-end developer</P>
        </HelloBlock>        
    </HelloBg>
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