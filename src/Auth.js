import React from 'react'

const Auth = {
    user : {
        Username : null,
        Password : null
    },
    isAuthenticated: false,
    authenticate() {
        this.isAuthenticated = true;
    },
    signout() {
        this.isAuthenticated = false;
    }
};

export default Auth
  