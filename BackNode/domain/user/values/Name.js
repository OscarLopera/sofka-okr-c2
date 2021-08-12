function Name(name) {
    if (name == null || name == "") {
            throw new Error("the field name cannot be empty  or null")
    }

    return {value: name}
}

module.exports = Name