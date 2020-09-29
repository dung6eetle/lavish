import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/pages/HomePage/Home';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <BrowserRouter>
       <Navbar />
         <Switch>
          <Route path="/" exact component={Home}/>
         </Switch>
       </BrowserRouter> 
      </header>
      
    </div>
  );
}

export default App;
