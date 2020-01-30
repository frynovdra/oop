class Auth {
    constructor(){
        this.message = [];
    }

    validate (credential){
        if(credential.username === 'user' && credential.password === 'password'){
            return true;
        } return  false;
    }

    message(prop, value, rule){
        if(rule === 'email'){
            this.messages.push(`this ${prop} not valid ${rule}`)
        }
    }
}