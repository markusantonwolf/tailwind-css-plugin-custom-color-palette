const getColors = require("./colors");
const fnc = require("./functions");
const fs = require('fs')

const options_default = {
    colors: {
        teal: "#408075",
    },
    utilities: {
        textColor: true,
        backgroundColor: true,
        borderColor: true,
        gradientColorStops: true,
        placeholderColor: true,
        divideColor: true,
        ringColor: true,
        ringOffsetColor: true,
    },
    variants: ["responsive"],
    calculation: "relative",
    steps: 100,
};

const colors = getColors(options_default)

fs.writeFile('./dist/custom-color-palette.css', fnc.flattenObject(colors), function (err) {
    if (err) {
        return console.log(err)
    }
})
