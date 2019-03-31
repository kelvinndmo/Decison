import React from 'react'
import Option from './Option'

const Options = (props) => {
    return (
        <div>
        <div className="widget-header">
        <h3 className="widget-header__title">Your options</h3>
        <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
        >
        Remove all
        </button>
        </div>
                {
                    props.options.map((option,index) => (
                    < Option key={option}
                    handleDeleteOption={props.handleDeleteOption} 
                    optionText={option}
                    count ={index + 1}
                    />)
                    )
                    
                }
        </div>
    )
}

export default Options;