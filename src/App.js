import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <BrowserRouter>
       <Navbar />
         <Switch>
          <Route path="/" />
         </Switch>
       </BrowserRouter> 
      </header>
    </div>
  );
}

export default App;
