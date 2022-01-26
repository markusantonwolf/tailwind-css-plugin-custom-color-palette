const plugin = require("tailwindcss/plugin");
const getColors = require("./colors");
const fnc = require("./functions");
const fs = require('fs')
const _ = require("lodash");

const ccp_config_defaults = {
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
        outlineColor: true,
        ruleColor: true,
    },
    calculation: "relative",
    export: false,
    steps: 100,
};

const ccp_utilities_defaults = {
    variants: ["responsive"],
};

if (process.env.NODE_ENV === "test") {
    const options = _.defaults(
        {
            colors: {
                blue: "#0a137f",
                gray: "#737b80",
            },
            steps: 50,
            export: false,
        },
        ccp_config_defaults
    );
    const colors = getColors(options);
    fs.writeFile(
        "./custom-color-palette.css",
        fnc.flattenObject(colors),
        function (err) {
            if (err) {
                return console.log(err);
            }
        }
    );
    console.info("colors", colors);
}

module.exports = plugin.withOptions((options) => {
    return function ({ addUtilities, theme, variants }) {
        const ccp_config = _.defaultsDeep(
            {},
            theme("customColorPalette"),
            ccp_config_defaults
        );
        const ccp_utilities = _.defaultsDeep(
            options,
            { variants: variants("customColorPalette") },
            ccp_utilities_defaults
        );
        if (Object.entries(ccp_config.colors).length === 0) {
            console.warn(
                "@markusantonwolf/tailwind-css-plugin-custom-color-palette - No colors defined"
            );
            return;
        }
        addUtilities(getColors(ccp_config), ccp_utilities);
    };
});
