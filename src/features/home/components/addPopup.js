import React from "react";
import './home.scss'
import TaskAPI from "../../../api/taskApi";
import { useState } from "react";


const AddPopup = ({setAddPopup, setListTask}) => {
    const [text, setText] = useState();

    const handleCreateTask = async() => {
        const result = await TaskAPI.createTask({content: text})    
        console.log(result)    
        setListTask((prev) => [...prev, result.data.newTask])
        setAddPopup(false)
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div className="popupOut" >
            <div className="popup">
                <h3 className="popup__tittle">Add Task</h3>
                <input placeholder="Your task?" onChange={handleChange} value={text}></input>
                <br></br>
                <button onClick={handleCreateTask}>Done</button>
                <button onClick={() => setAddPopup(false)}>Cancel</button>
            </div>
        </div>
    )
}

export default AddPopup;