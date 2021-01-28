import React, { useEffect, useState } from "react";
import Axios from "axios";
import Snippet from "./Snippet";
import TaskEditor from "./TaskEditor";

function Home() {
    const [snippets, setSnippets] = useState([]);
    const [snippetEditorOpen, setSnippetEditorOpen] = useState(false);
    const [editTaskData, setEditTaskData] = useState(null);

    useEffect(() => {
        //Get snippets 
        getSnippets();
    }, [])

    async function getSnippets() {
        const snippetsRes = await Axios.get("http://localhost:5000/snippet/");
        setSnippets(snippetsRes.data);
    }

    function editTask(snippetData){
        setEditTaskData(snippetData);
        setSnippetEditorOpen(true);
    }

    function renderSnippets() {

        let sortedSnippets = [...snippets];
        sortedSnippets = sortedSnippets.sort((a, b) =>{
            return new Date(b.createdAt) - new Date(a.createdAt);
        })

        return sortedSnippets.map((snippet, i) => {
            return <Snippet key={i} snippet={snippet} getSnippets={getSnippets} 
            editTask={editTask}
            />
        });
    }

    

    

    return (
        <div className="home">
            {!snippetEditorOpen && ( 
            <button onClick={() => setSnippetEditorOpen(true)}>
                Add snippet
            </button>
            )}
            {snippetEditorOpen && (
                <TaskEditor 
                setNewSnippetEditorOpen={setSnippetEditorOpen}
                getSnippets={getSnippets}
                editTaskData={editTaskData}
                />
            )}
            {renderSnippets()}
        </div>
    )}

export default Home;
