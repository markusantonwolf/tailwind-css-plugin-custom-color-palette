const plugin = require("tailwindcss/plugin");
const getColors = require("./colors");
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
    },
    calculation: "relative",
    steps: 100,
};

const ccp_utilities_defaults = {
    variants: ["responsive"],
};

if (process.env.NODE_ENV === "test") {
    const options = _.defaults(
        {
            colors: {
                teal: "#408075",
            },
        },
        ccp_config_defaults
    );
    console.info("colors", getColors(options));
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
