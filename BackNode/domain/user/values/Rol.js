function Rol(rol) {
    if (rol == null || rol == "") {
            throw new Error("the role field cannot be empty or null")
    }

    return {value: rol}
}

module.exports = Rol