import React from 'react';

function GameContext({context}) {

    return (<div className='bg-gray-100 rounded flex-auto my-2 snap-y whitespace-pre-wrap'>
        <h1>context</h1>
        <p>{context}</p>
    </div>);
}

export default GameContext;
