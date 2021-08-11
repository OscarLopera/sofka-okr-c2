function Phone(phone) {
    if (phone == null || phone == "") {
            throw new Error("the phone field cannot be null or empty");
    }
    return {value: phone}
}

module.exports = Phone