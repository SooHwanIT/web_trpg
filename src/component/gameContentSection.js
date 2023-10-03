import React, {useState} from 'react';
import GameContext from "./gameContent/gameContext";
import GameTitle from "./gameContent/gameTitle";
import ChoicesOption from "./gameContent/choicesOption";

const GameContentSection = (props) => {


    const [gameScenario,setGameScenario] = useState(gameScenarios[0])
    const [gameContext,setGameContext] = useState(gameScenarios[0].text)

    const updateGameContext = (contentText,optionText) =>{
        setGameContext(gameContext+"\n\n\n["+optionText+"]\n\n\n"+contentText)
    }

    const clearGameContext = () =>{
        setGameContext([])
    }
    const choicesRandomScenario = () =>{
        //이벤트 끝나고 다음 이벤트 고를때
        /* 고려 사항
            1. 메인 이벤트 안한지 얼마나 되었는지
            2. 서브 이벤트 분기
            3. 현제 장소
            4. 상태, 아이템 별 특수 이벤트
            5. 랜덤 이벤트
         */
    }

    const choicesOptionEvent = (index) => {
        const nextScenarioId = gameScenario.options[index].nextScenarioId;

        if (nextScenarioId) { //nextScenarioId 가 0이 아니면
            const nextScenario = gameScenarios.find((Scenario) => Scenario.scenarioId === nextScenarioId);
            setGameScenario(nextScenario)
            updateGameContext(nextScenario.text, gameScenario.options[index].text)
        }else{ //nextScenarioId 이 0이면 => 해당 시나리오가 끝나면
            clearGameContext()
            choicesRandomScenario() // 다음 시나리오 선택
        }
    }

    return (
        <div className='w-1/3 bg-black flex flex-col items-center justify-between p-2 max-w-lg'>
        <GameTitle></GameTitle>
        <GameContext context={gameContext}/>
        <ChoicesOption
            options={gameScenario.options}
            choicesOptionEvent={choicesOptionEvent}
        />
    </div>
    );
}

export default GameContentSection;
