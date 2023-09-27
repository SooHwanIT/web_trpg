import React from 'react';

const ChoicesOption = ({ options,choicesOptionEvent })=> {

    return (
        <div className='w-full h-48 bg-gray-500 rounded p-2 pt-0 flex flex-col justify-between'>
            {options.map((option,index)=>{
                return(
                    <div className='w-full flex-1 bg-gray-400 rounded mt-2'
                        key = {index} onClick={() => choicesOptionEvent(index)}>
                        {option.text}
                        {index}
                    </div>
                )
            })}
        </div>
        )
}

export default ChoicesOption;
