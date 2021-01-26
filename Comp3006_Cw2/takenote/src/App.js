import React from 'react';
import './App.css';
import Header from './components/Header'
import Addtask from'./components/Addtask'
import Tasks from'./components/Tasks'
import { Provider } from './context'



function App() {
  return (
  <Provider>
    <div className="app-container"> {/* uses fragments API to wrap components in an enclosing tag <div> would work fine  */}
    <Header/>
    <Addtask/>
    <Tasks/>

    </div></Provider>
  );
}

export default App;
