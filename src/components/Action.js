import React from 'react'


const Action = (props) => {
    return (
        <div>
            <button  className="big_button"
            onClick={props.handlePick}
            disabled={!props.hasOptions}
            >what should i do?</button>
        </div>
    )   
}

export default Action;

