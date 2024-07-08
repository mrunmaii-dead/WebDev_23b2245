import backgroundVideo from './pipes_bg.mp4'
import wrVideo from './world_record.mp4'
import './Highlights.css'
function Highlights(){

    return (
        <div className = "highlights">
            <video autoPlay loop muted className='bg-video'>
            <source src = {backgroundVideo } type="video/mp4"/>


        </video>
        
        <div className = "title" >
            <h1>Game Highlights</h1>
        </div>
        <div className="world-record-title">
        <h1>Flappy Bird World Record!</h1>
      </div>

        <div className="world-record-video">
        <video  autoPlay loop muted className="wr-video">
          <source src={wrVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

        

        
        </div>
    )
}
export default Highlights;