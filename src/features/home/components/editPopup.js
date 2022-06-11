import React, { useState } from "react";
import TaskAPI from "../../../api/taskApi";
import './home.scss'


const EditPopup = ({setEditPopup, id, setListTask}) => {
    const [text, setText] = useState()

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleDone = async() => {
        const result = await TaskAPI.editTask({id: id, content: text})
        setListTask((prev) => {
            const newTask = prev.filter((task) => {
                if (task._id === id) {
                    task.content = text;
                    return task;
                } else {
                    return task;
                }
            })
            return newTask;
        })
        setEditPopup(false);
    }

    return (
        <div className="popupOut" >
            <div className="popup">
                <h3 className="popup__tittle">Edit Task</h3>
                <p>Task cu can phai sua</p>
                <input placeholder="Your task?" onChange={handleChange} value={text}></input>
                <br></br>
                <button onClick={handleDone}>Done</button>
                <button onClick={() => setEditPopup(false)}>Cancel</button>
            </div>
        </div>
    )
}

export default EditPopup;