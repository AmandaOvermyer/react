import React from 'react';
import ReactDom from 'react-dom';

import Board from './components/board';

const Main = () => {
    var lists = [
    {title: "List1", cards: ["Card1", "Card2", "Card3"]},
    {title: "List2", cards: ["Card4", "Card5", "Card6"]},
    {title: "List3", cards: ["Card7", "Card8", "Card9"]}
    ]
    return (<div><Board title="My first Board" lists={lists}/></div>);
    
};


ReactDom.render(<Main/>, document.getElementById('app'))
;


