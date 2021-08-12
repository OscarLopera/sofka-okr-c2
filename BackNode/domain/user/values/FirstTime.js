function FirstTime(firstTime) {
        if (typeof firstTime !== "boolean") {
                throw new Error("The first time attribute is required and must be a boolean");
        }
        return {value: firstTime}
}

module.exports = FirstTime