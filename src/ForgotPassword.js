import React from 'react'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

export default class ForgotPassword extends React.Component{

    constructor(props){
        super(props)
        this.unblock = null;
        //this.unlisten = null;

    }
    
    componentDidMount(){     
        this.unblock = this.props.history.block("Are you sure you wish to leave this page?")
        // this.unlisten = this.props.history.listen((location, action) => {
        //     console.log(
        //       `The current URL is ${location.pathname}${location.search}${location.hash}`
        //     );
        //     console.log(`The last navigation action was ${action}`);
        //     if(action === 'POP'){
        //         this.props.history.push('/forgot-password')
        //         this.throwAlert()
        //     }
        // });
    }

    throwAlert = () => {
        const options = {
            title: 'Please Confirm',
            message: 'Are you sure you wish to leave this page?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => alert('Click Yes')
              },
              {
                label: 'No',
                onClick: () => alert('Click No')
              }
            ],
            //childrenElement: () => <div />,
            //customUI: ({ onClose }) => <div>Custom UI</div>,
            //closeOnEscape: true,
            //closeOnClickOutside: true,
            //willUnmount: () => {},
            //onClickOutside: () => {},
            //onKeypressEscape: () => {}
        };  
        confirmAlert(options);          
    }

    componentWillUnmount(){
        this.unblock()
        //this.unlisten()
    }

    render(){
       return (
        <h1>Forgot Password</h1>
        ) 
    } 
}