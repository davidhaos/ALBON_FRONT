import React from "react";

function Addition(){
    return(
        2+2
    )
}

function Subtraction(){
    return(
        2-2
    )
}

function AlexToDo() {
    const value = Addition();
    return (
        <div>
            <h1> To Do</h1>
            <p>I have {value} tasks</p>
            <p>Clean your room</p>
            <p>Eat Dinner</p>
        </div>
    )
} 

export default AlexToDo;