import React from 'react'; //add in useEffect
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';


function App() {

  const snippets = [
    {
      title: "Snippet 1",
    },
    {
      title: "Snippet 2",
    },
    {
      title: "Snippet 3",
    },
  ];

  function renderSnippets() {
    
    return snippets.map((snippet, i)=> {
      return <Snippet title={snippet.title} key={i}/>
    })
    
  }

  return (
    <>
      {renderSnippets()}
    </>
  );

  function Snippet(props) {
    return <h1>{props.title}</h1>;
  }

}




ReactDOM.render(<App />, document.getElementById('root'));







