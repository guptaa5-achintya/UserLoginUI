import React from 'react'
import Auth from './Auth'
import LoginForm from './LoginForm'
import {
    Redirect
} from "react-router-dom";
import { thisTypeAnnotation } from '@babel/types';

class Login extends React.Component {
    constructor(){
        super()
        this.state = {
            loading : false,
            login : false
            //...
        }
    }

    checkUserLogin = (username, password) => {
        console.log(JSON.stringify({
            Username : username,
            Password : password
        }))
        this.setState({
            loading: true
        })
        // setTimeout(() => this.setState({
        //     loading: false,
        //     login: true
        // }), 10)
        fetch("http://localhost:5000/api/UserLogin/Check", {
            method: 'POST',
            headers: {
                //'Access-Control-Allow-Origin': '*', 
                //'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Username : username,
                Password : password
            })
        })
            .then(response => response.json())
            .then(data => this.setState({
                loading : false,
                login: data
            }))
    }

    render(){
        if(!this.state.loading && this.state.login){
            Auth.authenticate()
            return <Redirect to = "/home"/>
        }
        return(
            <LoginForm handleLogin = {this.checkUserLogin}/>
        )
    }
}

export default Login

  