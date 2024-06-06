import React from 'react';
import Stopwatch from './Stopwatch';
import Timer from './Timer';
import Todo from './Todo';
import './App.css';

const DashBoard = () => {
    return (
        <div className='app-container'>
            <h1>Timer, StopWatch, and Todo list</h1>
            <div className='components-container'>
                <Stopwatch />
                <Timer />
                <Todo />
            </div>
        </div>
    );
};
export default DashBoard;
