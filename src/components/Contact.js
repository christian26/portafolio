import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import '../App.css';

const ContactDetails = () => (
    <div className="contact-details">
        <div className="map col-8"></div>
        <div className="details col-4">
            <h3>CONTACT DETAILS</h3>
            <div className="address-item">
                <span>Icon</span>
                <p>8901 Marmora Road, Glasgow, D04 89GR</p>
            </div>
            <div className="address-item">
                <span>Icon</span>
                <p>mail@demolink.org</p>
            </div>
            <div className="address-item">
                <span>Icon</span>
                <p>Tel: 123-456-7890</p>
            </div>
        </div>
    </div>
)

const ContactForm = () => (
    <form>
        <label>
            Name*
            <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
        <label>
            Email*
            <input type="email" name="email" />
        </label>
        <label>
            Message*
            <textarea></textarea>
        </label>
        <input type="submit" value="Send" />
    </form>
)

const Contact = () => (
    <div className="page-contact">
        <NavBar/>
        <h1>LET'S GET IN TOUCH</h1>
        <p>Lorem ipsum dolor sit amet vestibulum lacus at consequat sollicitudin arcu tortor enim 
            hendrerit nam quis vestibulum commodo blandit ornare cum hendrerit tellus dis pellentesque 
            congue odio porttitor pellentesque rutrum sodales lobortis mi consequat quis accumsan ut 
            laoreet. 
        </p>
        <ContactDetails/>
        <ContactForm/>
        <Footer/>
    </div>
)

export default Contact