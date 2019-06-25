import React from 'react'
import Auth from './Auth'
import LoginForm from './LoginForm'
import { Redirect } from "react-router-dom";
import Loading from './Loading';



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
        Auth.user = {
            Username : username,
            Password : password
        }
        console.log(Auth.user)
        this.setState({
            loading: true
        })
        setTimeout(this.verifyLogin, 3000)

    }

    verifyLogin = () => {
        
        fetch("http://localhost:5000/api/UserLogin/Check", {
            method: 'POST',
            headers: {
                //'Access-Control-Allow-Origin': '*', 
                //'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Auth.user)
        })
            .then(response => response.json())
            .then(data => this.setState({
                loading : false,
                login: data
            }))
            .catch(e => console.log(e))
    }

    render(){
        if(!this.state.loading && this.state.login){
            Auth.user.Password = null;
            Auth.authenticate()
            return <Redirect to = "/"/>
        }

        return(
            <Loading loading = {this.state.loading} >  
                <LoginForm handleLogin = {this.checkUserLogin}/>
            </Loading>    
        )
    }
}

export default Login

  