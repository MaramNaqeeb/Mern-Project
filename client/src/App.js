import './App.css';
import Main from './views/Main'

import React from 'react'

import Update from './views/Update'
import New from './views/New'
import City from './views/City'

import Detail from './views/Detail'
// import Props from './components/Props'
import Login from './log/Login'
import Registration from './log/Registration'






// import {  
//   BrowserRouter as Router,  

// }   
// from 'react-router-dom';
import { Router } from '@reach/router';
import LogReg from './views/LogReg';
import Dashboard from './log/Dashboard';
import Home from './views/Home';
import Table  from './views/Table';
// import List from './components/List'

// import  Drawer  from 'views/Drawer';



function App() {
  return (
    <div className="App">
      
<Router>
<Main path="/"/>
<Update path="/edit/:id/"/>
<New path="/new"/>
<LogReg path="/logreg"/>
{/* <Login path="/logreg"/> */}
{/* <Registration path="/reg"/> */}

<Dashboard path="/dashboard"/>
<Detail path="/:id/"/>
<Home path="/home"/>
<City path="/city"/>
{/* <Props path="/props"/> */}
{/* <City path="/city/"/> */}
{/* <Drawer path="/draw"/> */}
<Table path="/table"/>
{/* <List path='/list'/> */}


</Router>

    </div>
  );
}

export default App;
