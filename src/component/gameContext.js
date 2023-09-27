import React from 'react';

function GameContext(props) {

    return (<div className='border flex-1'>
        <h1>context</h1>
        {props.context}
    </div>);
}

export default GameContext;
