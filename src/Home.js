import React from 'react'
import Loading from './Loading';
import Auth from './Auth';


class Home extends React.Component{

    constructor(){
        super()
        this.state = {
            loading : false,
            UserSubscriptions : []
        }
    }

    componentDidMount(){
        fetch("http://localhost:5000/api/UserSubscription/Get", {
            method: 'POST',
            headers: {
                //'Access-Control-Allow-Origin': '*', 
                //'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: Auth.user.Username
        })
            .then(response => response.json())
            .then(data => this.setState({
                loading : false,
                UserSubscriptions: data
            }))
            .catch(e => console.log(e))
    }

    render(){
       return (
            <Loading loading = {this.state.loading} >
                <h1> Home </h1>
                <h1> Stuff </h1>
            </Loading>
        )  
    }
}

export default Home