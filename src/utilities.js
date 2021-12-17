const convert = require('color-convert');

module.exports = {
    general: (name, attribute, colors) => {
        var new_utilities = {};
        for (const property in colors) {
            const buffer = {};
            buffer[attribute] =
                'rgba(' +
                colors[property][0] +
                ', ' +
                colors[property][1] +
                ', ' +
                colors[property][2] +
                ', var(--tw-' +
                name +
                '-opacity, 1))';
            new_utilities['.' + name + '-' + property] = buffer;
        }
        return new_utilities;
    },
    placeholder: (colors) => {
        var new_utilities = {};
        for (const property in colors) {
            const buffer = {};
            buffer['color'] =
                'rgba(' +
                colors[property][0] +
                ', ' +
                colors[property][1] +
                ', ' +
                colors[property][2] +
                ', var(--tw-placeholder-opacity, 1))';
            new_utilities['.placeholder-' + property + '::placeholder'] = buffer;
        }
        return new_utilities;
    },
    gradientFrom: (colors) => {
        var new_utilities = {};
        for (const property in colors) {
            const buffer = {};
            buffer['--tw-gradient-from'] =
                'rgba(' +
                colors[property][0] +
                ', ' +
                colors[property][1] +
                ', ' +
                colors[property][2] +
                ', var(--tw-bg-opacity, 1))';
            buffer['--tw-gradient-stops'] =
                'var(--tw-gradient-from), var(--tw-gradient-to, rgba(' +
                colors[property][0] +
                ', ' +
                colors[property][1] +
                ', ' +
                colors[property][2] +
                ', var(--tw-bg-opacity, 1)))';
            buffer['--gradient-from-color'] =
                'rgba(' +
                colors[property][0] +
                ', ' +
                colors[property][1] +
                ', ' +
                colors[property][2] +
                ', var(--tw-bg-opacity, 1))';
            buffer['--gradient-color-stops'] =
                'var(--gradient-from-color), var(--gradient-to-color, rgba(' +
                colors[property][0] +
                ', ' +
                colors[property][1] +
                ', ' +
                colors[property][2] +
                ', var(--tw-bg-opacity, 1)))';
            new_utilities['.from-' + property] = buffer;
        }
        return new_utilities;
    },
    gradientTo: (colors) => {
        var new_utilities = {};
        for (const property in colors) {
            const buffer = {};
            buffer['--tw-gradient-to'] =
                'rgba(' +
                colors[property][0] +
                ', ' +
                colors[property][1] +
                ', ' +
                colors[property][2] +
                ', var(--tw-bg-opacity, 1))';
            buffer['--gradient-to-color'] =
                'rgba(' +
                colors[property][0] +
                ', ' +
                colors[property][1] +
                ', ' +
                colors[property][2] +
                ', var(--tw-bg-opacity, 1))';
            new_utilities['.to-' + property] = buffer;
        }
        return new_utilities;
    },
    ringColor: (colors) => {
        var new_utilities = {};
        for (const property in colors) {
            const buffer = {};
            buffer['--tw-ring-color'] =
                'rgba(' +
                colors[property][0] +
                ', ' +
                colors[property][1] +
                ', ' +
                colors[property][2] +
                ', var(--tw-ring-opacity))';
            new_utilities['.ring-' + property] = buffer;
        }
        return new_utilities;
    },
    ringOffsetColor: (colors) => {
        var new_utilities = {};
        for (const property in colors) {
            const buffer = {};
            const colorHex = convert.rgb.hex(
                colors[property][0],
                colors[property][1],
                colors[property][2]
            );
            buffer['--tw-ring-offset-color'] = '#' + colorHex;
            new_utilities['.ring-offset-' + property] = buffer;
        }
        return new_utilities;
    },
    outlineColor: (colors) => {
        var new_utilities = {};
        for (const property in colors) {
            const buffer = {};
            const colorHex = convert.rgb.hex(
                colors[property][0],
                colors[property][1],
                colors[property][2]
            );
            buffer['outline-color'] = '#' + colorHex;
            new_utilities['.outline-' + property] = buffer;
        }
        return new_utilities;
    },
};
