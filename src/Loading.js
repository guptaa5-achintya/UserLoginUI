import React from 'react'
import { PacmanLoader } from 'react-spinners'
import "./login.css"

export default function Loading(props){
    return(
        <div>
            {
                props.loading ? 
                    <div className = "loader">
                        <PacmanLoader
                        color={'rgb(139, 113, 233)'} 
                        loading={props.loading} 
                        size = {60}
                        />
                    </div>
                :
                    props.children
            }
        </div>
    )
}