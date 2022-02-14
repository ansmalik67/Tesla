import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import Main from "./components/Main";


ReactDOM.render(
    <Main />,document.getElementById('root')
    );
//   <Routes>
//         <Route path="/" component ={<Section {...props.path}/>}> </Route>
//         <Route path="/modelx" component ={<Section {...props.path}/>}> </Route>
//         <Route path="/modely" component ={<Section {...props.path}/>}> </Route>
//         <Route path="/solarroof" component ={<Section {...props.path}/>}> </Route>
//         <Route path="/models" component ={<Section {...props.path}/>}> </Route>
//         <Route path="/solarpanels" component ={<Section {...props.path}/>}> </Route>
// <App />
//         </Routes>,
  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
