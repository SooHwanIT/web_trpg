import React from 'react';

function CharacterStates() {
    const playerProfile = () =>{
        return (
            <div className='w-32 h-32 mr-2 bg-gray-100 rounded'>

            </div>
        )
    }

        const playerStats = () => {
        const max_hp = 5
        const max_mp = 5
        const cur_hp = 5
        const cur_mp = 5



        return (
            <div className='flex-1 h-32  bg-gray-100 rounded'>

            </div>
        )
    }

    const playerStates = () => {
        const states = [
            { state: '긍정적 옵션', isPositive: true },
            { state: '부정적 옵션', isPositive: false },
            { state: '턴 제한이 있는 긍정적 옵션', isPositive: true , duration : 5},
            { state: '턴 제한이 있는 부정적 옵션', isPositive: false , duration : 3}
        ];

        return (
            <div className='h-[164px] flex-1 bg-gray-100 rounded pr-1 as'>
                <ul className='w-full max-h-full flex flex-wrap flex-rows overflow-auto pb-1'>
                    {states.map((state, index) => {
                        return (
                            <li
                                key={index}
                                className={`rounded ${state.isPositive ? 'bg-green-400' : 'bg-red-400'} m-1 mb-0 mr-0 p-1 px-2 block relative`}
                            >
                                {state.state}
                                {state.duration && <span className="ml-1"> ( {state.duration} )</span>}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }

    return (
        <div className='w-full h-80 bg-black  rounded flex flex-col p-2'>
            <div className='flex'>
                {playerProfile()}
                {playerStats()}
            </div>
            <div className='h-full mt-2'>
                {playerStates()}
            </div>
        </div>
    )
}

export default CharacterStates;
