import './note.css'
import { FaTrash } from 'react-icons/fa';
function Note(props){
    
  return (
       <div className = "note" style = {{backgroundColor: props.note.color}}>
           <textarea className  = "note_text" defaultValue={props.note.text}/>
           <div className = "note_footer">
           <p>{props.note.time}</p>
           <div className="del" onClick={ () => props.deleteNote(props.note.id)}><FaTrash/></div>
           </div></div>
    )
   }
   export default Note;