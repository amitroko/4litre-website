import React, {Component} from 'react';
import './App.css';
import Boat from './IMG_4603.mov';

class Home extends Component {
    render(){
        return(
            <div className="home-wrapper">
                <video className="boat-vid" src={Boat} autoPlay muted loop>Your browser does not support the video tag :(</video>
            </div>
        );
    }
}

export default Home;