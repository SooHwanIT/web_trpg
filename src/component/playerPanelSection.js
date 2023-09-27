import React from 'react';
import Inventory from "./inventory";
import CharacterStates from "./characterStates";

function PlayerPanelSection(props) {
    return (
        <div className='
        border
        max-w-md
        flex-1 justify-between
        flex flex-col
        '>
            <CharacterStates></CharacterStates>
            <Inventory></Inventory>
        </div>
    )
}

export default PlayerPanelSection;
