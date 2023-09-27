import React, {useState} from 'react';
import GameContext from "./gameContext";
import GameTitle from "./gameTitle";
import ChoicesOption from "./choicesOption";

function GameContentSection(props) {
    const gameScenarios = [
        {
            scenarioId: 1,
            text: "당신은 조용한 마을에 도착했습니다. 주변을 둘러보니 북쪽으로 가는 길과 동쪽으로 가는 길이 있습니다.",
            isStartPoint:true,
            location:'village',
            setState:{},
            setItem:{},
            options: [
                { nextScenarioId: 2, text: "북쪽으로 간다.", needState: {}, needItem: {} },
                { nextScenarioId: 3, text: "동쪽으로 간다.", needState: {}, needItem: {} }
            ]
        },
        {
            scenarioId :2,
            text:'북쪽으로 가다 보니 낡은 집이 하나 보입니다. 집 안에서는 약간의 불빛이 새어 나오고 있습니다.',
            isStartPoint:false,
            location:'old_house',
            setState:{'found_house': true},
            setItem:{},
            options:[
                {nextScenarioId :4,text:'집 안을 살펴본다.',needState:{},needItem:{}},
                {nextScenarioId :1,text:'돌아간다.',needState:{},needItem:{}}
            ]
        },
        {
            scenarioId :3,
            text:"동쪽으로 가다 보니 큰 나무가 하나 있습니다. 나무 밑에서는 반짝이는 무언가가 보입니다.",
            isStartPoint:false,
            location:'big_tree',
            setState:{},
            setItem:{'key': true},
            options:[
                {nextScenarioId :5,text:"반짝이는 것을 살펴본다.",needState:{},needItem:{}}
            ]
        },
        {
            scenarioId :4,
            text:"집 안은 허름하게 보입니다. 그러나 벽장 한 켠에 걸려 있는 망토는 굉장히 값비싼 것 같습니다.",
            isStartPoint:false,
            location:"old_house",
            setState:{},
            setItem:{'cloak': true},
            options:[
                {nextScenarioId :6,text:"망토를 가져간다.", needState:{'found_house': true}, needItem:{}}
            ]
        },
        {
            scenarioId :5,
            text:"반짝거리는 것은 열쇠였습니다. 이 열쇠로 어디를 열 수 있을까요?",
            isStartPoint:false,
            location:"big_tree",
            setState:{},
            setItem:{},
            options:[
                {nextScenarioId :7,text:"나무 밑을 더 살펴본다.", needState:{}, needItem:{'key':true}}
            ]
        },
        {
            scenarioId :6,
            text:"망토를 가져왔습니다. 이제 이 망토로 무엇을 할 수 있을까요?",
            isStartPoint:false,
            location:"old_house",
            setState:{},
            setItem:{},
            options:[
                {nextScenarioId :0,text:"집을 나간다.", needState:{}, needItem:{'cloak':true}}
            ]
        },
        {
            scenarioId: 7,
            text: "나무 밑에는 작은 상자가 있습니다. 상자는 잠겨 있어 보입니다.",
            isStartPoint:false,
            location:'big_tree',
            setState:{},
            setItem:{},
            options: [
                { nextScenarioId: 8, text: "열쇠로 상자를 연다.", needState: {}, needItem: {'key': true} },
                { nextScenarioId: 1, text: "돌아간다.", needState: {}, needItem:{} }
            ]
        },
        {
            scenarioId :8,
            text:"상자를 열었습니다. 안에는 빛나는 보석이 들어있습니다.",
            isStartPoint:false,
            location:'big_tree',
            setState:{},
            setItem:{'gem': true},
            options:[
                {nextScenarioId :0,text:"보석을 가져가고 돌아간다.",needState:{},needItem:{}}
            ]
        },
        // Here we start a new Scenario
        {
            scenarioId :9,
            text:'당신은 큰 성에 도착했습니다. 성문은 굳게 닫혀있어 들어갈 수 없습니다.',
            isStartPoint:true,
            location:'castle',
            setState:{'found_castle': true},
            setItem:{},
            options:[
                {nextScenarioId :10,text:'성문을 살펴본다.',needState:{},needItem:{}},
                {nextScenarioId :0,text:'성에서 떠난다.',needState:{},needItem:{}}
            ]
        },
        {
            scenarioId :10,
            text:"성문은 굳게 잠겨 있지만, 작은 열쇠구멍이 하나 있는 것 같습니다.",
            isStartPoint:false,
            location:'castle',
            setState:{},
            setItem:{},
            options:[
                {nextScenarioId :11,text:"열쇠로 문을 연다.",needState:{'found_castle': true},needItem:{'key':true}},
                {nextScenarioId :9,text:"돌아간다.",needState:{},needItem:{}}
            ]
        },
        {
            scenarioId :11,
            text:"성문이 열렸습니다. 안으로 들어갑니다.",
            isStartPoint:false,
            location:"castle",
            setState:{},
            setItem:{},
            options:[
                {nextScenarioId :12,text:"계속 진행한다.", needState:{'found_castle': true}, needItem:{}}
            ]
        },
        {
            scenarioId: 13,
            text: "당신은 성 안에서 큰 홀에 도착했습니다. 홀에는 다양한 사람들이 모여있고, 왕좌가 놓여져 있습니다.",
            isStartPoint:false,
            location:'castle_hall',
            setState:{},
            setItem:{},
            options: [
                { nextScenarioId: 14, text: "왕과 대화한다.", needState: {}, needItem:{} },
                { nextScenarioId: 15, text: "성을 떠난다.", needState:{}, needItem:{} }
            ]
        },
        {
            scenarioId :14,
            text:"왕은 당신을 반갑게 맞아주었습니다. 그는 당신에게 중요한 임무를 부여합니다.",
            isStartPoint:false,
            location:'castle_hall',
            setState:{'met_king': true},
            setItem:{},
            options:[
                {nextScenarioId :0,text:'임무를 수행한다.',needState:{'met_king': true},needItem:{}},
                {nextScenarioId :13,text:'성으로 돌아간다.',needState:{},needItem:{}}
            ]
        },
        {
            scenarioId :15,
            text:"당신은 성을 떠나기로 결정했습니다. 어디로 향하시겠습니까?",
            isStartPoint:false,
            location:'castle',
            setState:{},
            setItem:{},
            options:[
                {nextScenarioId :16,text:"북쪽으로 간다.", needState:{}, needItem:{}},
                {nextScenarioId :17,text:"동쪽으로 간다.", needState:{}, needItem:{}}
            ]
        },
        {
            scenarioId :16,
            text:"북쪽으로 가는 도중, 눈이 많이 내리기 시작했습니다. 길이 보이지 않습니다.",
            isStartPoint:false,
            location:'north',
            setState:{},
            setItem:{},
            options:[
                {nextScenarioId :0,text:"눈을 헤치고 계속 간다.",needState:{},needItem:{}},
                {nextScenarioId :15,text:"성으로 돌아간다.",needState:{},needItem:{}}
            ]
        },
        {
            scenarioId :17,
            text:"동쪽으로 가는 도중, 큰 강을 만났습니다. 어떻게 건널까요?",
            isStartPoint:false,
            location:'east',
            setState:{},
            setItem:{'boat': true},
            options:[
                {nextScenarioId :18,text:'배를 이용하여 건넌다.',needState:{},needItem:{}},
                {nextScenarioId :15,text:'성으로 돌아간다.',needState:{},needItem:{}}
            ]
        },
        {
            scenarioId: 18,
            text: "당신은 배를 이용하여 강을 성공적으로 건넜습니다.",
            isStartPoint:false,
            location:'river',
            setState:{'crossed_river': true},
            setItem:{},
            options: [
                { nextScenarioId: 19, text: "계속 진행한다.", needState: {'crossed_river': true}, needItem:{} },
                { nextScenarioId: 15, text: "성으로 돌아간다.", needState:{}, needItem:{} }
            ]
        },
        {
            scenarioId :19,
            text:"당신은 모험을 계속합니다. 어디로 가야 할지 결정해야 합니다.",
            isStartPoint:false,
            location:'wilderness',
            setState:{},
            setItem:{},
            options:[]
        }
    ];
    const gameItemList = [
        {index:1,itemName:'item1',isNesting:true},
        {index:2,itemName:'item2',isNesting:true},
        {index:3,itemName:'item3',isNesting:true},
        {index:4,itemName:'item4',isNesting:true},
        {index:5,itemName:'item5',isNesting:true},
    ]
    const gameStateList = [
        {index:1,itemName:'state1',isNesting:true},
        {index:2,itemName:'state2',isNesting:true},
        {index:3,itemName:'state3',isNesting:true},
        {index:4,itemName:'state4',isNesting:true},
        {index:5,itemName:'state5',isNesting:true},
    ]

    const gameLog = []

    const [gameScenario,setGameScenario ] = useState(gameScenarios[0])
    const [gameContext,setGameContext] = useState(gameScenarios[0].text)
    const updateGameContext = (text) =>{
        setGameContext(gameContext+'\n'+text)
    }
    const clearGameContext = () =>{
        setGameContext('')
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
        // console.dir(gameScenario)
        if (nextScenarioId) { //nextScenarioId 가 0이 아니면
            const nextScenario = gameScenarios.find((Scenario) => Scenario.scenarioId === nextScenarioId);
            setGameScenario(nextScenario)
            updateGameContext(nextScenario.text)
        }else{ //nextScenarioId 이 0이면 => 해당 시나리오가 끝나면
            clearGameContext()
            choicesRandomScenario() // 다음 시나리오 선택
        }
    }

    return (
        <div className='
        border
        max-w-md
        flex-1 justify-between
        flex flex-col'>
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
