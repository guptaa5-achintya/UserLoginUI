import React from 'react'
import "./subscriptions.css"
export default function Alert(props){
    return(
        <div className = "listItem" onClick = {() => props.handleClick(props.alert.name)}>
            <h3 className = "textbox">Name: {props.alert.name}</h3>
            {props.alert.description && 
                <h3 className = "textbox">Description: {props.alert.description}</h3>
            }
        </div>
    )
}