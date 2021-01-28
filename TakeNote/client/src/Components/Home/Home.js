import React, { useEffect, useState } from "react";
import Axios from "axios";
import Task from "./Task";
import TaskEditor from "./TaskEditor";

function Home() {
    const [tasks, setTasks] = useState([]);
    const [taskEditorOpen, setTaskEditorOpen] = useState(false);
    const [editTaskData, setEditTaskData] = useState(null);

    useEffect(() => {
        //Get tasks
        getTasks();
    }, [])

    async function getTasks() {
        const tasksRes = await Axios.get("http://localhost:5000/task/");
        setTasks(tasksRes.data);
    }

    function editTask(taskData){
        setEditTaskData(taskData);
        setTaskEditorOpen(true);
    }

    function renderTasks() { //renders the tasks to the frontend so they can be seen 
        let sortedTasks = [...tasks];
        sortedTasks = sortedTasks.sort((a, b) =>{
            return new Date(b.createdAt) - new Date(a.createdAt);
        })

        return sortedTasks.map((task, i) => {
            return <Task key={i} task={task} getTasks={getTasks} 
            editTask={editTask}
            />
        });
    }
    return (
        <div className="home"> //Button that adds a task
            {!taskEditorOpen && ( 
            <button onClick={() => setTaskEditorOpen(true)}>
                Add task
            </button>
            )}
            {taskEditorOpen && (
                <TaskEditor 
                setTaskEditorOpen={setTaskEditorOpen}
                getTasks={getTasks}
                editTaskData={editTaskData}
                />
            )}
            {renderTasks()}
        </div>
    )}

export default Home;
