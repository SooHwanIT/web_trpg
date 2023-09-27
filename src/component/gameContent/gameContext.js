import React from 'react';

function GameContext(props) {

    return (<div className='bg-gray-500 rounded flex-auto my-4 snap-y'>
        <h1>context</h1>
        {props.context}
    </div>);
}

export default GameContext;
