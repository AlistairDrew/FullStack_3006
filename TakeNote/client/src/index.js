import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';


function App(){

  const [message,setMessage] = useState("Hello world");

  useEffect(() => {
    setTimeout(() => {
      setMessage("Hi There");
    }, 2000);
  }, []); //empty dependency array makes component run once, prevents infinite loop and memory leak

  

  return(
    <>
  <Welcome user = "Jane Doe" message={message}/>
  <Welcome user = "John Doe" message={message}/>
  <Welcome user = "Peter Doe" message={message}/>
  </>
  );
}

function Welcome(props){
  return (
  <>
  <h1>Welcome {props.user} to this site</h1>
  <p>{props.message}</p>
  </>
  );
}


ReactDOM.render(<App/>, document.getElementById('root'));







