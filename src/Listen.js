import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import SpotifyPlayer from 'react-spotify-player';
import './App.css';

class Listen extends Component {
    render() {
        return(
            <div className="listen-wrapper">
                <div className="track">
                    <p>fourlitre (album)</p>
                    <div className="player-wrapper">
                        <iframe src="https://open.spotify.com/embed/album/5Nb51CRtndpdNpCurj8jhg" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        <ReactPlayer url="https://soundcloud.com/fourlitresounds/sets/fourlitre"/> 
                    </div>
                </div>
                <div className="track">
                    <p>"tangerine"</p>
                    <div className="player-wrapper">
                        <iframe src="https://open.spotify.com/embed/track/4UakE1mG8ldgxZtN4bMjrH" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        <ReactPlayer url="https://soundcloud.com/fourlitresounds/tangerine"/>
                    </div>
                </div>
                <div className="track">
                    <p>"smooth operator"</p>
                    <div className="player-wrapper">
                        <iframe src="https://open.spotify.com/embed/track/285QvHRvIxwaM7bUGMbOBs" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        <ReactPlayer url="https://soundcloud.com/fourlitresounds/smooth-operator"/>
                    </div>
                </div>
                <div className="track">
                    <p>"ayonho"</p>
                    <ReactPlayer className="player-wrapper" url="https://soundcloud.com/fourlitresounds/ayonho"/>
                </div>
                <div className="track">
                    <p>"tesseract"</p>
                    <ReactPlayer className="player-wrapper" url="https://soundcloud.com/fourlitresounds/tesseract"/>
                </div>
                <div className="track">
                    <p>"berliner"</p>
                    <ReactPlayer className="player-wrapper" url="https://soundcloud.com/fourlitresounds/berliner"/>
                </div>
            </div>
        );
    }
}

export default Listen;