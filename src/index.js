const plugin = require("tailwindcss/plugin");
const getColors = require("./colors");
const _ = require("lodash");

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

if (process.env.NODE_ENV === "test") {
    console.info("colors", getColors(options_default));
}

module.exports = plugin.withOptions((options = {}) => {
    return function ({ addUtilities }) {
        options = _.defaults({}, options, options_default);
        addUtilities(getColors(options), options.variants);
    };
});
