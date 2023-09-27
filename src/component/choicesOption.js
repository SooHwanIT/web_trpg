import React from 'react';

const ChoicesOption = ({ options,choicesOptionEvent })=> {

    return (
        <div className='border'>
            TestCode
            {options.map((option,index)=>{
                return(
                    <div className='border-t-2'
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
