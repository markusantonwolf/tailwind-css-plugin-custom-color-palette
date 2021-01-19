const fnc = require("./functions");
const utilities = require("./utilities");
const convert = require("color-convert");
const _ = require("lodash");

module.exports = function (options) {
    var new_utilities = {};
    var new_colors = {};

    if (options.calculation === "linear") {
        new_colors = newColorsLinear(options);
    } else {
        new_colors = newColorsRelative(options);
    }

    new_colors = fnc.sort(new_colors);

    if (options.utilities.textColor === true) {
        new_utilities = _.merge(
            new_utilities,
            utilities.general("text", "color", new_colors)
        );
    }
    if (options.utilities.backgroundColor === true) {
        new_utilities = _.merge(
            new_utilities,
            utilities.general("bg", "backgroundColor", new_colors)
        );
    }
    if (options.utilities.borderColor === true) {
        new_utilities = _.merge(
            new_utilities,
            utilities.general("border", "borderColor", new_colors)
        );
    }
    if (options.utilities.placeholderColor === true) {
        new_utilities = _.merge(
            new_utilities,
            utilities.placeholder(new_colors)
        );
    }
    if (options.utilities.gradientColorStops === true) {
        new_utilities = _.merge(
            new_utilities,
            utilities.gradientFrom(new_colors)
        );
        new_utilities = _.merge(
            new_utilities,
            utilities.gradientTo(new_colors)
        );
    }
    if (options.utilities.divideColor === true) {
        new_utilities = _.merge(
            new_utilities,
            utilities.general("divide", "borderColor", new_colors)
        );
    }
    if (options.utilities.ringColor === true) {
        new_utilities = _.merge(new_utilities, utilities.ringColor(new_colors));
    }
    if (options.utilities.ringOffsetColor === true) {
        new_utilities = _.merge(
            new_utilities,
            utilities.ringOffsetColor(new_colors)
        );
    }

    // for (const property in options.utilities) {
    //     switch (options.utilities[property]) {
    //         case 'textColor':
    //             new_utilities = _.merge(new_utilities, utilities.general('text', 'color', new_colors));
    //             break;
    //         case 'backgroundColor':
    //             new_utilities = _.merge(
    //                 new_utilities,
    //                 utilities.general('bg', 'backgroundColor', new_colors)
    //             );
    //             break;
    //         case 'borderColor':
    //             new_utilities = _.merge(
    //                 new_utilities,
    //                 utilities.general('border', 'borderColor', new_colors)
    //             );
    //             break;
    //         case 'placeholderColor':
    //             new_utilities = _.merge(new_utilities, utilities.placeholder(new_colors));
    //             break;
    //         case 'gradientColorStops':
    //             new_utilities = _.merge(new_utilities, utilities.gradientFrom(new_colors));
    //             new_utilities = _.merge(new_utilities, utilities.gradientTo(new_colors));
    //             break;
    //         case 'divideColor':
    //             new_utilities = _.merge(
    //                 new_utilities,
    //                 utilities.general('divide', 'borderColor', new_colors)
    //             );
    //             break;
    //         case 'ringColor':
    //             new_utilities = _.merge(new_utilities, utilities.ringColor(new_colors));
    //             break;
    //         case 'ringOffsetColor':
    //             new_utilities = _.merge(new_utilities, utilities.ringOffsetColor(new_colors));
    //             break;
    //         default:
    //             break;
    //     }
    // }

    return new_utilities;
};

function newColorsLinear(options) {
    const new_colors = {};
    for (const property in options.colors) {
        var index = 0;
        var level = 95;

        while (index < 1000 - parseInt(options.steps)) {
            index += parseInt(options.steps);
            level -= 190 / (1000 / parseInt(options.steps));

            try {
                const color = convert.hex.rgb(
                    fnc.adjustColorLinear(options.colors[property], level)
                );
                new_colors[property + "-" + index] = color;
            } catch (error) {
                console.info(
                    "Tailwind CSS Plugin Custom Color Steps - not rendered color ",
                    property + ": " + options.colors[property] + " - " + level
                );
            }
        }
    }
    return new_colors;
}

function newColorsRelative(options) {
    const new_colors = {};
    const steps = 1000 / options.steps / 2;
    for (const property in options.colors) {
        const color = convert.hex.hsl(options.colors[property]);
        const darker = (color[2] - 5) / steps;
        const lighter = (100 - color[2] - 5) / steps;
        for (let counter = 1; counter < steps; counter++) {
            const level = 500 + options.steps * counter;
            new_colors[property + "-" + level] = convert.hsl.rgb(
                color[0],
                color[1],
                parseInt(color[2] - counter * darker)
            );
        }
        for (let counter = 0; counter < steps; counter++) {
            const level = 500 - options.steps * counter;
            new_colors[property + "-" + level] = convert.hsl.rgb(
                color[0],
                color[1],
                parseInt(color[2] + counter * lighter)
            );
        }
    }
    return new_colors;
}
