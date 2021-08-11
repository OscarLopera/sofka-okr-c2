function FirstTime(firstTime) {
        if (typeof firstTime !== "boolean") {
                throw new Error("The first time attributeis required and must be a boolean");
        }
        return {value: firstTime}
}

module.exports = FirstTime