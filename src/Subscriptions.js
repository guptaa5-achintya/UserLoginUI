import React from 'react'
import Loading from './Loading';
import Auth from './Auth';
import './subscriptions.css'
import Alert from './Alert';
import { confirmAlert } from 'react-confirm-alert'
import NewAlertWindow from './NewAlertWindow'
import SuccessWindow from './SuccessWindow';


class Subscriptions extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            loading : true,
            UserSubscriptions : []
        }
    }

    componentDidMount(){
        console.log(Auth.user)
        fetch("http://localhost:5000/api/UserSubscription/Get", {
            method: 'POST',
            headers: {
                //'Access-Control-Allow-Origin': '*', 
                //'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Auth.user.Username)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                var alerts = this.formatData(data)
                this.setState({
                loading : false,
                UserSubscriptions: alerts
                })
            })
            .catch(e => console.log(e))
    }

    formatData = (data) => {
        var alerts = [];
        for(var i = 1; i < 6; i++){
            alerts.push({
                name: "Alert" + i,
                subscribed: data["alert" + i],
                custom:false
            })
        }

        alerts.push(...data["customAlert"].map((alert)=>{
            return {
                name: alert.name,
                description: alert.description,
                subscribed: true,
                custom: true
            }
        }))
        console.log(alerts)
        return alerts
    }

    deformatData = (alerts) => {
        var data = {
            CustomAlert: [],
            Username: Auth.user.Username
        }
        alerts.forEach((alert) => {
            if(alert.custom){
                if(alert.subscribed){
                    data.CustomAlert.push(alert)
                }
            } else {
                data[alert.name] = alert.subscribed
            }
        })
        console.log(data)
        return data
    }

    alertChange = (name) => {
        this.setState((state) => {
            return {
                UserSubscriptions : state.UserSubscriptions.map((alert) => {
                    if(alert.name === name){
                        alert.subscribed = !alert.subscribed
                    }
                    return alert
                })
            }
        })
    }

    navigateLogin = () => {
        this.props.history.push("/login")
        Auth.signout()
    }

    successAlert = () => {
        confirmAlert({
            customUI : ({ onClose }) => {
                return (
                    <SuccessWindow 
                        handleClose = {onClose}
                        handleNavigateLogin = {this.navigateLogin}
                    />
                )
            }
        })
        console.log("success")
    }

    createNewAlert = (name, description) => {
        this.setState((state) => {
            state.UserSubscriptions.push({
                name: name,
                description: description,
                subscribed: true,
                custom: true
            })
            return {
                UserSubscription : state.UserSubscription
            }
        })
    }

    handleAddAlert = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
              return (
                    <NewAlertWindow 
                        handleClose = {onClose} 
                        handleCreateNewAlert = {this.createNewAlert}
                    />
                )
            }
        })
    }

    handleSubmit = () => {
        var data = this.deformatData(this.state.UserSubscriptions)
        fetch("http://localhost:5000/api/UserSubscription/Update", {
            method: 'POST',
            headers: {
                //'Access-Control-Allow-Origin': '*', 
                //'Accept': 'text/plain',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                data && this.successAlert()
            })
            .catch(e => console.log(e))

    }

    render(){
        var subscribed = [];
        var unsubscribed = [];
        if(!this.state.loading){
            this.state.UserSubscriptions.forEach((alert) => {
                var alertComp = <Alert 
                                    //className = "listItem" 
                                    alert = {alert}
                                    key = {alert.name}
                                    handleClick = {this.alertChange}                                  
                                />
                if(alert.subscribed){
                    subscribed.push(alertComp)
                }else{
                    unsubscribed.push(alertComp)
                }
            })
        }
        
        return (
            <Loading loading = {this.state.loading} >
                <h1 className = "left header block">Subscribed</h1>
                <h1 className = "right header block">Not Subscribed</h1>
                <div className = "left list block">
                    {subscribed}
                </div>
                <div className = "right list block">
                    {unsubscribed}
                </div>
                <div className = "form">
                    <button onClick = {this.handleAddAlert}>Add New Alert</button>
                    <button onClick = {this.handleSubmit}>Submit Changes</button>
                </div>
            </Loading>
        )  
    }
}

export default Subscriptions