function UrlPhoto(urlPhoto) {
    if (urlPhoto == null || urlPhoto == "") {
            throw new Error("The url field cannot be empty or empty")
    }

    return {value: urlPhoto}
}

module.exports = UrlPhoto