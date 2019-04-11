import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import '../App.css';

const SkillsSet = () => (
    <div className="col-6">
        <h2>SKILLS</h2>
        <p>Lorem ipsum dolor sit amet vestibulum lacus at cons equat sollicitudin arcu 
            tortor enim hendrerit namet quis vestibulum commodo blandit ornare cum  odio pellentesque 
            rutrum sodales lobortis consequat mi quis accumsan ut laoreet tempo or dolor nibh tellus 
            hendrerit tellus dis am pellentesque congue porttitor mattis elementum.
        </p>
        <div className="skills">
            <strong>HTML - 90%</strong>
            <div className="bar-graph"></div>
        </div>
        <div className="skills">
            <strong>JAVASCRIPT - 90%</strong>
            <div className="bar-graph"></div>
        </div>
        <div className="skills">
            <strong>CSS - 90%</strong>
            <div className="bar-graph"></div>
        </div>
        <div className="skills">
            <strong>SASS - 90%</strong>
            <div className="bar-graph"></div>
        </div>
        <div className="skills">
            <strong>PHP - 90%</strong>
            <div className="bar-graph"></div>
        </div>
    </div>
)

const Recognitions = () => (
    <div className="col-6">
        <h2>RECOGNITIONS</h2>
        <p>Lorem ipsum dolor sit amet accumsan enim  laoreet tempo or dolor nibh sodales hendrerit 
            tellus dis am pellentesque congue porttitor.
        </p>
        <div className="recognitio-list">
            <div>
                <img src="https://via.placeholder.com/90X90" alt="Project"/>
                <strong>RECOGNITIONS</strong>
                <p>Lorem ipsum dolor sit amet vestibulum lacus enim consequat sollicitudin arcu.</p>
            </div>
            <div>
                <img src="https://via.placeholder.com/90X90" alt="Project"/>
                <strong>RECOGNITIONS</strong>
                <p>Lorem ipsum dolor sit amet vestibulum lacus enim consequat sollicitudin arcu.</p>
            </div>
            <div>
                <img src="https://via.placeholder.com/90X90" alt="Project"/>
                <strong>RECOGNITIONS</strong>
                <p>Lorem ipsum dolor sit amet vestibulum lacus enim consequat sollicitudin arcu.</p>
            </div>
        </div>
    </div>
)

const Education = () => (
    <div className="education">
        <h2>Education</h2>
        <p>Lorem ipsum dolor sit amet vestibulum lacus at consequat sollicitudin arcu tortor enim hendrerit 
            nam quis vestibulum ipsum commodo blandit ornare cum hendrerit tellus dis pellentesque congue 
            odio porttitor pellentesque rutrum sodales lobortis mi consequat quis accumsan ut laoreet 
            viverra vehicula metus ut libero. 
        </p>
        <section className="row">
            <div className="date col-2">2010 - 2011</div>
            <div className="timeline-point col-2">Point</div>
            <div className="education__description col-8">
                <h3>INSTITUTE NAME</h3>
                <i>Degree or Diploma</i>
                <p>Lorem ipsum dolor sit amet vestibulum lacus pellentesque rutrum sodales lobortis mi 
                    consequat quis accumsan ut laoreet viverra vehicula metus ut libero nec porttitor 
                    sit mus bibendum odio vestibulum erat.
                </p>
            </div>
        </section>
        <section className="row">
            <div className="date col-2">2010 - 2011</div>
            <div className="timeline-point col-2">Point</div>
            <div className="education__description col-8">
                <h3>INSTITUTE NAME</h3>
                <i>Degree or Diploma</i>
                <p>Lorem ipsum dolor sit amet vestibulum lacus pellentesque rutrum sodales lobortis mi 
                    consequat quis accumsan ut laoreet viverra vehicula metus ut libero nec porttitor 
                    sit mus bibendum odio vestibulum erat.
                </p>
            </div>
        </section>
        <section className="row">
            <div className="date col-2">2010 - 2011</div>
            <div className="timeline-point col-2">Point</div>
            <div className="education__description col-8">
                <h3>INSTITUTE NAME</h3>
                <i>Degree or Diploma</i>
                <p>Lorem ipsum dolor sit amet vestibulum lacus pellentesque rutrum sodales lobortis mi 
                    consequat quis accumsan ut laoreet viverra vehicula metus ut libero nec porttitor 
                    sit mus bibendum odio vestibulum erat.
                </p>
            </div>
        </section>
    </div>
)

const Skills = () => (
    <div className="page-center">
        <NavBar/>
        <h1>WHAT I'M BEST AT</h1>
        <p>Lorem ipsum dolor sit amet vestibulum lacus at consequat sollicitudin arcu tortor 
            enim hendrerit nam quis vestibulum commodo blandit ornare cum hendrerit tellus dis 
            pellentesque congue odio porttitor pellentesque rutrum sodales lobortis mi consequat 
            quis accumsan ut laoreet.
        </p>
        <SkillsSet/>
        <Recognitions/>
        <Education/>
        <Footer/>
    </div>
)

export default Skills