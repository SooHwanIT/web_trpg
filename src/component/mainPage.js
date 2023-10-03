import React from 'react';
import GameContentSection from "./gameContentSection";
import PlayerPanelSection from "./playerPanelSection";
import MemuInfoSection from "./memuInfoSection";

const MainPage = (props) => {
    return (
    <div className='flex justify-between w-screen h-screen'>
        <MemuInfoSection></MemuInfoSection>
        <GameContentSection></GameContentSection>
        <PlayerPanelSection></PlayerPanelSection>
    </div>
        );
}

export default MainPage;
