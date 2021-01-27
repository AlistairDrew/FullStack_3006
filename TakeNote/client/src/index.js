import React, { useState } from 'react'; //add in useEffect
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';


function App() {

const [formUsename, setFormUsername] = useState("");
const [formPassword, setFormPassword] = useState("");

    function sendData(e){
      e.preventDefault();
      
      //sending data
      setFormUsername("");
      setFormPassword("");

    }
  

  return (
    <>
     <form onSubmit={sendData}>
       <input type="text" 
       placeholder="Username" 
       onChange={(e)=> setFormUsername(e.target.value)}
       value={setFormUsername}
       />

       <input type="password" 
       placeholder="Password"
       onChange={(e)=> setFormPassword(e.target.value)}
       value={setFormPassword}
       />
       <button type="submit" placeholder="Submit">Log in</button> 
     </form>


    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));







