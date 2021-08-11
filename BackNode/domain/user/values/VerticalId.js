function VerticalId(verticalId) {
    if (verticalId == null || verticalId == "") {
            throw new Error("the url  field cannot be empty or empty")
    }

    return {value: verticalId}
}

module.exports = VerticalId