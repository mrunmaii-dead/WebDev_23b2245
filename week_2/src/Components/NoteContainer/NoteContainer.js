import Note from "../Note";
import {useState} from 'react'
import './NoteContainer.css'
function NoteContainer ({notes = [], darkMode,deleteNote}) {
    const reverArray = (arr) => {
        const array = [];
        for(let i = arr.length-1;i>=0;--i){
            array.push(arr[i])
        }
        return array;
    }
    const revnote = reverArray(notes)
    return(
        <div className={darkMode ? 'dark-mode-note-container' : 'light-mode-note-container'}>
        <div className ="note-container">
            <h1 className = "header">NoteIt</h1>
            <div className = "note-container_notes custom-scroll">
            {
                notes.map((item,index) =>( <Note
           key = {index}
           note = {item}
           deleteNote = {deleteNote}
           />))
            }
            
            
            
            
            </div>
            </div>
            </div>
    )
}
export default NoteContainer;