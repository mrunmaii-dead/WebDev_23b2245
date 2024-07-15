 import './Sidebar.css'
 import {useState} from 'react'
 import { FaEdit ,FaTrash,FaMoon,FaSun } from "react-icons/fa";
 import { FiEdit2 ,  FiToggleLeft} from "react-icons/fi"
 function Sidebar({darkMode,toggleDarkMode,addNote}){
    const [listOpen , setListOpen] = useState(false)
    const colors = [ "#FFCDB2" , "#FFB4A2","#E5989B","#B5838D"]
    return(
        <div className={darkMode ? 'dark-mode-sidebar' : 'light-mode-sidebar'}>
        <div className = "sidebar">
            <h4></h4>
            < div className="nav-link-icon"  onClick = {toggleDarkMode}> {darkMode ? <FaMoon /> : <FaSun />} </div>
            <div className = "icon" onClick = {() => setListOpen(!listOpen)}><FiEdit2/></div>
            <ul className = {`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`} >
                {colors.map((item , index) =>(
                <li className = "sidebar_list_item"
                key = {index}
                style = {{backgroundColor: item}}
                onClick = { () => addNote(item)}/>
            ))}
                </ul>
                

        </div>
        </div>
    )
 }
 export default Sidebar;