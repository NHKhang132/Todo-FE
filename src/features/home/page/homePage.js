import React, { useEffect, useState } from "react";
import TaskAPI from "../../../api/taskApi";
import Header from "../../../shareComponents/header/header";
import AddPopup from "../components/addPopup";
import EditPopup from "../components/editPopup";
import ListTask from "../components/listTask";
import './homePage.scss'


const HomePage = () => {
    const [listTask, setListTask] = useState([]);

    const [addPopup, setAddPopup] = useState(false)

    const handleAddTask = () => {
        setAddPopup(true)
    } 

    const handleDoneAll = async() => {
        const result = await TaskAPI.doneTask();
        setListTask((prev) => {
            const newTask = prev.filter((task) => {
                task.isDone = true;
                return task;
            })
            return newTask;
        })
    }

    const handleDeleteAll = async() => {
        const result = await TaskAPI.deleteAllTask();
        setListTask([])
    }

    const getTask = async() => {
        const result = await TaskAPI.getTask()
        setListTask(result.data.tasks)
    }

    useEffect (() =>{
        getTask();
    }, [])


    return (
        <>  
            <div className="listContainer">
                <div className="listContainer__buttonContainer">
                    <button className="listContainer__buttonContainer__btn1" onClick={handleAddTask}><i class="fa-regular fa-calendar-plus"></i></button>
                    <button className="listContainer__buttonContainer__btn2"><i class="fa-solid fa-check-double" onClick={handleDoneAll}></i></button>
                    <button className="listContainer__buttonContainer__btn3"><i class="fa-solid fa-trash-can" onClick={handleDeleteAll}></i></button>
                </div>
                <ListTask listTask={listTask} setListTask={setListTask}></ListTask>
            </div> 
            {(addPopup && <AddPopup setAddPopup = {setAddPopup} setListTask = {setListTask}></AddPopup>)}
            
        </>
    )
}

export default HomePage;