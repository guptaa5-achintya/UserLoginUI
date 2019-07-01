import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom'

class LoginForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username : "",
            password : "",
        }
    }
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleLogin(this.state.username, this.state.password)
    }

    render(){
        return(
            <div>
                <form onSubmit = {event => this.handleSubmit(event)}>
                    <input 
                        type="text" 
                        className="text"
                        value={this.state.username} 
                        name="username" 
                        placeholder="Username" 
                        onChange={this.handleChange} 
                    />
                    <br />
                    <input 
                        type="password" 
                        className="text"
                        value={this.state.password} 
                        name="password" 
                        placeholder="Password" 
                        onChange={this.handleChange} 
                    />
                    <Link to = "/forgot-password">forgot password</Link>
                    <br />
                    <button> Login </button>
                </form>
            </div>
            
        )
    }
}
export default LoginForm