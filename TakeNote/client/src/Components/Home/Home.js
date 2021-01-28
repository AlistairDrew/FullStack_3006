import React, { useEffect, useState } from "react";
import Axios from "axios";
import Snippet from "./Snippet";
//import { renderIntoDocument } from "react-dom/test-utils";

function Home() {
    const [snippets, setSnippets] = useState([]);
    const [newSnippetEditorOpen, setNewSnippetEditorOpen] = useState(false);
    const [editorTitle, setEditorTitle] = useState("")
    const [editorDescription, setEditorDescription] = useState("")
    const [editorCode, setEditorCode] = useState("")


    useEffect(() => {
        //Get snippets 
        getSnippets();
    }, [])

    async function getSnippets() {
        const snippetsRes = await Axios.get("http://localhost:5000/snippet/");
        setSnippets(snippetsRes.data);
    }

    function renderSnippets() {
        return snippets.map((snippet, i) => {
            return <Snippet key={i} snippet={snippet} />
        });
    }

    async function saveSnippet(e){
        e.preventDefault();
        
        const snippetData={
            title: editorTitle ? editorTitle : undefined, //prevents empty strings from being put into the database
            description: editorDescription ? editorDescription : undefined,
            code: editorCode ? editorCode : undefined
        };

        await Axios.post("http://localhost:5000/snippet", snippetData);
    }

    return (
        <div className="home">
            {!newSnippetEditorOpen && ( <button onClick={() => setNewSnippetEditorOpen(true)}>
                Add snippet
            </button>
            )}
            {setNewSnippetEditorOpen && (<div className="snippet-editor">
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
                </form>
            </div>
            )}
            {renderSnippets()}
        </div>
    )}

export default Home;
