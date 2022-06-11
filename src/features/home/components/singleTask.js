import React, { useState } from "react";
import TaskAPI from "../../../api/taskApi";
import EditPopup from "./editPopup";

const SingleTask = ({item, setListTask}) => {
    const [editPopup, setEditPopup] = useState(false)

    
    const handleEditTask = () => {
        setEditPopup(true)
    } 

    const handleDeleteTask = async() => {
        console.log(item._id)
        const result = await TaskAPI.deleteTask({id: item._id});
        console.log('result', result)
        setListTask((prev) => {
            const newTask = prev.filter((task) => task._id != result.data.deletedTask._id)
            return newTask;
        })
    }

    const handleDone = async() => {
        if (item.isDone) {
            const result = await TaskAPI.notdoneTask({id: item._id});
            setListTask((prev) => {
                const newTask = prev.filter((task) => {
                    if (task._id === item._id) {
                        task.isDone = false;
                        return task;
                    } else {
                        return task;
                    }
                })
                return newTask;
            })
        } else {
            const result = await TaskAPI.doneTask({id: item._id});
            setListTask((prev) => {
                const newTask = prev.filter((task) => {
                    if (task._id === item._id) {
                        task.isDone = true;
                        return task;
                    } else {
                        return task;
                    }
                })
                return newTask;
            })
        }
    }

    return (
        <>
        <div className="singleTask">
            <div style={{display: "flex"}}>
                <div style={{marginRight: "10px"}}>
                    {item.isDone
                    ? <i class="fa-solid fa-square-check" onClick={handleDone}></i> 
                    : <i class="fa-regular fa-square" onClick={handleDone}></i>}
                </div>
                <div>
                    {item.isDone
                    ? <p style={{textDecorationLine: "line-through"}}>{item.content}</p> 
                    : <p>{item.content}</p>}
                </div>
            </div>
            <div style={{display: "flex"}}>
                <div style={{marginRight: "5px"}}>
                    <i class="fa-solid fa-pen"  onClick={handleEditTask}></i>
                </div>
                <div>
                    <i class="fa-solid fa-trash-can" onClick={handleDeleteTask}></i>
                </div>
            </div>
        </div>
        {(editPopup && <EditPopup id={item._id} setEditPopup = {setEditPopup} setListTask={setListTask}></EditPopup>)}
        </>
    )
}

export default SingleTask;