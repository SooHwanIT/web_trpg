import React from 'react';
import GameContentSection from "./gameContentSection";
import PlayerPanelSection from "./playerPanelSection";

function MainPage(props) {
    return (
    <div className='flex w-screen h-screen '>
        <GameContentSection></GameContentSection>
        <PlayerPanelSection></PlayerPanelSection>
    </div>
        );
}

export default MainPage;
