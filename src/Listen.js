import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import './App.css';

class Listen extends Component {
    render() {
        return(
            <div className="listen-wrapper">
                <div className="track">
                    <p>08.28.2020 - "ayonho"</p>
                    <ReactPlayer url="https://soundcloud.com/4litresounds/ayonho"/>
                </div>
                <div className="track">
                    <p>08.14.2020 - "tesseract"</p>
                    <ReactPlayer url="https://soundcloud.com/4litresounds/tesseract"/>
                </div>
                <div className="track">
                    <p>08.07.2020 - "berliner"</p>
                    <ReactPlayer url="https://soundcloud.com/4litresounds/berliner"/>
                </div>
            </div>
        );
    }
}

export default Listen;