import React from 'react';
import List from './list';

export default (props) => {
    function onAddInputChange(){
        console.log("changing the input");
    }
    function onSubmit(e){
        e.preventDefault();
        console.log("sending the form");
    }
    return(
        <div>
            <h1>{props.title}</h1>
            <div className ="list-container">
                {props.lists.map(function(list){
                    return (<List title={list.title} cards={list.cards} onAddInputChange={onAddInputChange} onSubmit={onSubmit}/>)
                })
                }
            </div>
        </div>
        );
}