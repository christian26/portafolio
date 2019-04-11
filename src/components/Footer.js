import React from 'react'
import SocialIcons from './SocialIcons'

const Footer = () => (
    <footer>
        <div className="col-4">
            <h4>CONTACT DETAILS</h4>
            <p>8901 Marmora Road, Glasgow, D04 89GR</p>
            <p>mail@demolink.org</p>
            <p>Tel: 123-456-7890</p>
        </div>
        <div className="col-8">
            <h4>ABOUT</h4>
            <p>Posuere pede urna aliquet ipsum parturient fusce justo neque integer sit 
                lectus nulla nulla donec urna hendrerit nam arcu augue vel sodales lacus 
                vehicula erat sit turpis quis in nonummy justo.
            </p>
            <SocialIcons/>
        </div>
        <div className="copy-rights">Copyright @ All Rights Reserved</div>
    </footer>
)

export default Footer