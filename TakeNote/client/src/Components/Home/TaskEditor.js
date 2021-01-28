import React,{useState, useEffect} from "react";
import Axios from "axios";


function TaskEditor({getTasks, setTaskEditorOpen, editTaskData}){
    const [editorTitle, setEditorTitle] = useState("")
    const [editorDescription, setEditorDescription] = useState("")
    const [editorNote, setEditorNote] = useState("")



    useEffect(()=>{
        if(editTaskData){
            setEditorTitle(editTaskData.title ? editTaskData.title : "");
            setEditorDescription(editTaskData.description ? editTaskData.description : "");
            setEditorNote(editTaskData.note ? editTaskData.note : "");
        }
    },[editTaskData]);

    async function saveTask(e) {
        e.preventDefault();

        const taskData = {
            title: editorTitle ? editorTitle : undefined, //prevents empty strings from being put into the database
            description: editorDescription ? editorDescription : undefined,
            note: editorNote ? editorNote : undefined
        };

        if (!editTaskData)
            await Axios.post("http://localhost:5000/task", taskData);
        else
            await Axios.put(`http://localhost:5000/task/${editTaskData._id}`, taskData);

        getTasks();
        closeEditor();
    }

    function closeEditor() {
        setTaskEditorOpen(false);
        setEditorTitle("");
        setEditorDescription("");
        setEditorNote("");
    };


    return <div className="Name">
        <div className="task-editor">
                <form onSubmit={saveTask}>
                    <label htmlFor="editor-title">Title</label>
                    <input 
                    id="editor-title" 
                    type="text" 
                    value={editorTitle}
                    onChange={(e) => setEditorTitle(e.target.value)}/>

                    <label htmlFor="editor-description">Description</label>
                    <input 
                    id="editor-description" 
                    type="text" 
                    value={editorDescription}
                    onChange={(e) => setEditorDescription(e.target.value)}/>

                    <label htmlFor="editor-note">Note</label>
                    <textarea 
                    id="editor-note" 
                    value={editorNote}
                    onChange={(e) => setEditorNote(e.target.value)}/>

                <button type="submit">Save Task</button>
                <button type="button" onClick={closeEditor}>Cancel</button>
                </form>
            </div>
    </div>
};
//k
export default TaskEditor;