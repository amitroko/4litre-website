import React, {Component} from 'react';
import './App.css';
import Boat from './4litreboat.gif';

class Home extends Component {
    render(){
        return(
            <div className="home-wrapper">
                <img src={Boat} alt="o.o"/>
            </div>
        );
    }
}

export default Home;