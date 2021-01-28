import React,{useState, useEffect} from "react";
import Axios from "axios";


function TaskEditor({getSnippets, setSnippetEditorOpen, editTaskData}){
    const [editorTitle, setEditorTitle] = useState("")
    const [editorDescription, setEditorDescription] = useState("")
    const [editorCode, setEditorCode] = useState("")



    useEffect(()=>{
        if(editTaskData){
            setEditorTitle(editTaskData.title ? editTaskData.title : "");
            setEditorDescription(editTaskData.description ? editTaskData.description : "");
            setEditorCode(editTaskData.code ? editTaskData.code : "");
        }
    },[editTaskData]);

    async function saveSnippet(e) {
        e.preventDefault();

        const snippetData = {
            title: editorTitle ? editorTitle : undefined, //prevents empty strings from being put into the database
            description: editorDescription ? editorDescription : undefined,
            code: editorCode ? editorCode : undefined
        };

        if (!editTaskData)
            await Axios.post("http://localhost:5000/snippet", snippetData);
        else
            await Axios.put(`http://localhost:5000/snippet/${editTaskData._id}`, snippetData);

        getSnippets();
        closeEditor();
    }

    function closeEditor() {
        setSnippetEditorOpen(false);
        setEditorTitle("");
        setEditorDescription("");
        setEditorCode("");
    };

    return <div className="Name">
        <div className="snippet-editor">
                <form onSubmit={saveSnippet}>
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

                    <label htmlFor="editor-code">Code</label>
                    <textarea 
                    id="editor-code" 
                    value={editorCode}
                    onChange={(e) => setEditorCode(e.target.value)}/>

                <button type="submit">Save Task</button>
                <button type="button" onClick={closeEditor}>Cancel</button>
                </form>
            </div>
    </div>
};

export default TaskEditor;