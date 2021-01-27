import React, { useState, useEffect } from 'react'; //add in useEffect
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';


function App() {


const [messageShown, setMessageShown] = useState(false);

//First way of using useEffect
useEffect(() =>{ //component update side effect, will be triggered any value is changed.
  console.log("Component updating");
});



//Third way of using useEffect,puts specificity onto when to call useEffect , this one only calls whenever messageShown is changed 
useEffect(() =>{ 
  console.log("Specific state update");
},[messageShown]);

function Random(){
  const[randomNumber, setRandomNumber] = useState(Math.random()); 
  //Second way of using useEffect also the most common way of using useEffect, with empty dependency array.
useEffect(() =>{
  console.log("Component mount")
  const intervalId = setInterval(() => {
    setRandomNumber(Math.random());
  }, 1000);
  
return () => { //Fourth way to apply useEffect, when unmounting certain things
  console.log("Compnent Unmount");
  clearInterval(intervalId);
}

}, []);
return <h1>{randomNumber}</h1>
}
  

  return (
    <>
      
      <button onClick={() => setMessageShown(!messageShown)}>Toggle Message</button>
      {messageShown && (
      <>
        <Random />
        <p>Some Message</p>
    
      </>
      )}

    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));







