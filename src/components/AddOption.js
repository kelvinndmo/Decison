import React from 'react'


export default class AddOption extends React.Component{
    state = {
        error:undefined
    }
    handleAddOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.kevo.value.trim();
        const error = this.props.handleAddOption(option);
        
        this.setState(() => {
            return {error}
        })
        if (!error) {
            e.target.elements.kevo.value = '';

        }
    }
    render(){
        return (
            <div>
                <p className = "add-option-error">{this.state.error}</p>
          <form className="add-option" onSubmit={this.handleAddOption}>
              <input className="add-option__input" type="text" name="kevo"></input>
              <button className="button" > Add Option </button>
          </form> 
          </div>
        )
    }
}

