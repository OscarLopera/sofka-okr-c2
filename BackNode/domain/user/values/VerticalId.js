function VerticalId(verticalId) {
    if (verticalId == null || verticalId == "") {
            throw new Error("the verticalId cannot be empty or empty or null")
    }

    return {value: verticalId}
}

module.exports = VerticalId