// https://www.kirupa.com/react/simple_todo_app_react.htm
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import TodoList from "./TodoList"



var destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <TodoList/>
    </div>,
    destination
);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA





 serviceWorker.unregister();
