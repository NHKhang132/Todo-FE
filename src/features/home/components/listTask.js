import React from "react";
import SingleTask from "./singleTask";
import './home.scss' 

const ListTask = ({listTask, setListTask}) => {
    return (
        <div className="listTask">
            {listTask.map((item) => {
                return (
                    <SingleTask item={item} setListTask={setListTask}></SingleTask>
                )
            }
            )    
            }
        </div>
    )
}

export default ListTask;