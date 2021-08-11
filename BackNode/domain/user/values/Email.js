function Email(email) {
    if(!email){
        throw new Error("The email cannot be empty")
    }
    if (email.length <= 5){
        throw new Error("The email must be greater than 5 characters");
    }
    const rexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!rexEmail.test(email)) {
        throw new Error("The email is not valid");
    }
    return {value: email};
}

module.exports = Email;