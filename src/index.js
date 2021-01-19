const plugin = require("tailwindcss/plugin");
const getColors = require("./colors");
const _ = require("lodash");

const options_default = {
    colors: {},
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
    const options = _.defaults(
        {
            colors: {
                teal: "#408075",
            },
        },
        options_default
    );
    console.info("colors", getColors(options));
}

module.exports = plugin.withOptions((options = {}) => {
    return function ({ addUtilities }) {
        options = _.defaults({}, options, options_default);
        if (Object.entries(options.colors).length === 0) {
            console.warn(
                "@markusantonwolf/tailwind-css-plugin-custom-color-palette - No colors defined"
            );
            return;
        }
        addUtilities(getColors(options), options.variants);
    };
});
