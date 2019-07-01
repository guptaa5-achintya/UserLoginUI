import React from 'react'
export default class NewAlertWindow extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name : "",
            description : ""
        }

        


    }
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = () => {
        this.props.handleCreateNewAlert(this.state.name, this.state.description)
        this.props.handleClose()
    }

    render(){
        return(
            <div>
                <input 
                    type="text" 
                    className="text"
                    value={this.state.name} 
                    name="name" 
                    placeholder="Name" 
                    onChange={this.handleChange} 
                />
                <br />
                <input 
                    type="text" 
                    className="text"
                    value={this.state.description} 
                    name="description" 
                    placeholder="Description" 
                    onChange={this.handleChange} 
                />
                <button 
                    className = "windowButton left" 
                    onClick = {this.handleSubmit}
                >Confirm</button>
                <button 
                    className = "windowButton right" 
                    onClick = {this.props.handleClose}
                >Cancel</button>
            </div>  
        )
    }

}