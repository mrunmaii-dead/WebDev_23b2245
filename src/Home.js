import './Home.css';

import backgroundVideo from './pipes_bg.mp4'
function Home(){
    return (
     <div className = "home">
        <video autoPlay loop muted className='bg-video'>
            <source src = {backgroundVideo } type="video/mp4"/>


        </video>
       
        
        <div className = "title">
        <h1> Flappy Bird</h1>
        <audio  autoPlay>
          <source src="/theme.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
        </div>

     </div>   


    );
}

export default Home;