import React from 'react';

const ChoicesOption = ({ options,choicesOptionEvent })=> {

    return (
        <div className='w-full h-48 bg-gray-900 rounded pt-0 flex flex-col justify-between'>
            {options.map((option,index)=>{
                return(
                    <div className={`w-full flex-1 bg-gray-300 rounded ${index? 'mt-2' : 'mt-0' } `}
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
