import React, {Component} from 'react';
import './App.css';
import Instagram from './icons/Instagram.js';
import Mail from './icons/Mail.js';
import Soundcloud from './icons/Soundcloud.js';
import Youtube from './icons/Youtube.js';

class Footer extends Component {
    render(){
        return(
            <div className="footer-wrapper">
                <div className="footer-links-wrapper">
                    <a className="footer-link" href="https://soundcloud.com/4litresounds" target="_blank"><Soundcloud height="40px"/></a>
                    <a className="footer-link" href="https://www.youtube.com/channel/UCpvl4LhRxaufEfsb5J2oEfg" target="_blank"><Youtube height="40px"/></a>
                    <a className="footer-link" href="https://www.instagram.com/4litresounds/" target="_blank"><Instagram height="40px"/></a>
                    <a className="footer-link" href="mailto:4litresounds@gmail.com"><Mail height="40px"/></a>
                </div>
            </div>
        );
    }
}

export default Footer;