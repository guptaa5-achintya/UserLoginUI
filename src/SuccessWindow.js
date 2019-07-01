import React from 'react'
export default function SuccessWindow(props) {

    return(
        <div>
            <h3 className = "text success">You have successfully changed your alert subscriptions. Would you like to leave this page and go back to login?</h3>
            <br/>
            <button 
                className = "windowButton left" 
                onClick = {() => {
                        props.handleNavigateLogin()
                        props.handleClose()
                    }
                }
            >Yes</button>
            <button 
                className = "windowButton right" 
                onClick = {props.handleClose}
            >No</button>
        </div>  
    )
    

}