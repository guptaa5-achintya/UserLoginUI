import React from 'react'
import { withRouter } from 'react-router-dom'

export default class ForgotPassword extends React.Component{

    constructor(){
        super()
        this.unblock = null;
    }
    
    componentDidMount(){     
        this.unblock = this.props.history.block("Are you sure you wish to leave this page?")
    }

    componentWillUnmount(){
        this.unblock()
    }

    render(){
       return (
        <h1>Forgot Password</h1>
        ) 
    } 
}