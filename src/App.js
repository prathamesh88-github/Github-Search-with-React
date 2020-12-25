import React from 'react';
import './App.css';
// import Productitem from '../src/components/Productitem';
// import LoginForm from './components/LoginForm'
// import RegisterForm from './components/RegisterForm'

import GithubAPI from './components/GithubAPI'

function App() {
    return ( 
        <div className = "App" >

        {/* <nav className = "navbar navbar-dark bg-dark text-white" >
        <a className = "navbar-brand" >Developed By Prathamesh</a> </nav> */}

         <GithubAPI/>

        </div>
    );
}
export default App;