import React from 'react';
import Inventory from "./playerPanel/inventory";
import CharacterStates from "./playerPanel/characterStates";

const PlayerPanelSection = (props) => {
    return (
        <div className='w-1/3 p-2 pr-4 pb-0 flex flex-col max-w-lg'>
            <CharacterStates></CharacterStates>
            <Inventory></Inventory>
        </div>
    )
}

export default PlayerPanelSection;
