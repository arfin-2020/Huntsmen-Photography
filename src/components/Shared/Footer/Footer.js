import React from 'react';
import Footerpost from '../FooterPost/Footerpost';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import './Fotter.css';
const Footer = () => {
    const noNamed = [
        {name: "House #No-01 , Anderson Road " , link: "/"},
        {name: "Cox's Bazar,Chittagong" , link: "/"},
        
    ]
    const about = [
        {name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aliquid voluptates esse repudiandae officiis quae illum tempore quas voluptatibus itaque!'},  
    ]
    const quickLinks = [
        {name: "Quick links" , link: "/"},
        {name: "Rentails" , link: "/"},
        {name: "sales" , link: "/"},
        {name: "Contact" , link: "/"},
        {name: "Our Blogs" , link: "/"}
    ]
    const company = [
        {name: "About" , link: "/"},
        {name: "Project" , link: "/"},
        {name: "Our Team" , link: "/"},
        {name: "Terms & Conditions" , link: "/"},
        {name: "Check Up" , link: "/"},
        {name: "Check Up" , link: "/"},
        {name: "Check Up" , link: "/"}
    ]
    return (
        <footer className="footer-area clear-both">
        <div className="container pt-5">
            <div className="row py-5">
                <Footerpost key={1} menuTitle={""} menuItems={noNamed}/>
                <Footerpost key={2} menuTitle="Company" menuItems={company}/>
                <Footerpost key={3} menuTitle="Quick Links" menuItems={quickLinks}/>
                <Footerpost key={4} menuTitle="About" menuItems={about}> 
                    <ul className="social-media list-inline">
                        <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                        <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                        <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                    </ul>
                    <div className="mt-5">
                        <h6 className ='text-white'>Call now</h6>
                        <button className="fency-btn">+2025550295</button>
                    </div>
                </Footerpost>
            </div>
            <div className="copyRight text-center text-white">
                <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
            </div>
        </div>
    </footer>
    );
};

export default Footer;