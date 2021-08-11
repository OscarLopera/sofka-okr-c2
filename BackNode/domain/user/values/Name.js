function Name(name) {
    if (name == null || name == "") {
            throw new Error("the name field cannot be empty or empty")
    }

    return {value: name}
}

module.exports = Name