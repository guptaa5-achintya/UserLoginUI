import React from 'react'
import Auth from './Auth'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'


export default function SubscriptionHeader(props){
    return (
        <div>
            <div className = "header">
                <h3>Welcome {Auth.user.Username}</h3>
                <button onClick = {props.handleLogOut} >Logout</button>
            </div>
        </div>
    )
}