
import './App.css'
//logo and uske 
import { useState , useEffect } from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import NavigationBar from './Navbar';
import NoteContainer from './Components/NoteContainer/NoteContainer';
function App() {
  const deleteNote = (id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };

  const [notes ,setNotes] = useState(
    JSON.parse(localStorage.getItem("plis")) || []
  )
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const addNote = (color) =>{
    const tempNotes = [...notes]
    tempNotes.push({
      id: Date.now(),
      text:"",
      time:  new Date().toLocaleTimeString(),
      color,
    })
    setNotes(tempNotes)
  }
  useEffect(() => {
    localStorage.setItem("plis", JSON.stringify(notes));
  }, [notes]);
  return (
    
      <div className={ darkMode ? 'dark-mode' : 'light-mode'}>
        

    <div className="App">
    <Sidebar darkMode = {darkMode} toggleDarkMode= {toggleDarkMode} addNote = {addNote}/>
      <NoteContainer notes = {notes}  darkMode = {darkMode} deleteNote={deleteNote}/>
      
      
    </div>
    </div>
  );
}

export default App;