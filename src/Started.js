import './Started.css';
import backgroundVideo from './pipes_bg.mp4';
import birdImage from './flappy.gif';
import pipesImage from './pipes.jpg';
import flightImage from './flight.jpg';
import victoryImage from './victory.jpeg'
import phyVideo from './physics.mp4'
import jumpVideo from './jump.mp4'
import playVideo from './play.mp4'

function Started() {
    return (
        <div className="getting-started">
            <video autoPlay loop muted className="bg-video">
                <source src={backgroundVideo} type="video/mp4" />
            </video>

            <div className="started">
                <h1>Getting started!</h1>
            </div>
            <div className="game-elements">
                <div className="game-item">
                    <img src={birdImage} alt="Bird" className="game-image" />
                    <h1>You have a bird!</h1>
                </div>
                <div className="game-item">
                    <img src={pipesImage} alt="Pipes" className="game-image" />
                    <h1>And you have your Pipes!</h1>
                </div>
            </div>
            <div className = "main">
                <div className = "main-item">
                <h2>The game follows actual physics</h2>
                <video autoPlay loop muted className="main-image">
                <source src={phyVideo} type="video/mp4" />
            </video>
                </div>
                <div className = "main-item">
                    <h2>Keep on clicking to keep the birdy in flight!</h2>
                    <video autoPlay loop muted className="main-image">
                <source src={jumpVideo} type="video/mp4" />
            </video>
                </div>
                <div className = "main-item">
                    <h2>Avoid those pesky pipes and make your way to victory!</h2>
                    <video autoPlay loop muted className="main-image">
                <source src={playVideo} type="video/mp4" />
            </video>
                </div>
            </div>
        </div>
    );
}

export default Started;
