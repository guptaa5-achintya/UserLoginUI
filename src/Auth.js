
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
        this.user.Username = null;
        this.user.Password = null;
    }
};

export default Auth
  