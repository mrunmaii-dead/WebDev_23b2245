import './Overview.css'
import backgroundVideo from './pipes_bg.mp4'
import secondVideo from './gameplay.mp4';
import { useState } from 'react';
function Overview(){

    const [showSecond , setShowSecond] = useState(false);

    const handleButtonClick = () => {
        setShowSecond(true);
    };
    return (
        
        <div className = "overview">
             <video autoPlay loop muted className='bg-video'>
            <source src = {backgroundVideo } type="video/mp4"/>
        </video>
        <div className = "container">
        <div className = "head">
        <h1> Game Overview</h1>
        </div>
        <div className = "content">
        <h3>"Flappy Bird" is a mobile game where players tap to make a bird flap its wings, navigating it through gaps between pipes without crashing. It's known for its addictive simplicity and challenging gameplay. </h3>
        </div>
        <div className = "but">
            <button onClick={handleButtonClick}>Wheres the Bird?</button>
        </div>
        </div>
        {showSecond && (
                <div className="second-video-container">
                    <video autoPlay loop className="second-video">
                        <source src={secondVideo} type="video/mp4" />
                    </video>
                </div>
            )}
        </div>
    )
}
export default Overview;