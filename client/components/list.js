import React from 'react';
import Card from './card';

export default (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <ul>
               {props.cards.map(function(card){
                   return (<Card name={card}/>)
               })
               }
               <form onSubmit={props.onSubmit}>
               <input type="text" onChange={props.onAddInputChange}/>
               <button>New Card</button>
               </form>
            </ul>
        </div>
        );
}