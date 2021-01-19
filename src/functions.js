const _ = require("lodash");
const { paramCase } = require('change-case')

module.exports = {
    sort: (new_colors) => {
        return Object.keys(new_colors)
            .sort()
            .reduce((obj, key) => {
                obj[key] = new_colors[key];
                return obj;
            }, {});
    },
    adjustColorLinear: (color, amount) => {
        return (
            "#" +
            color
                .replace(/^#/, "")
                .replace(/../g, (color) =>
                    (
                        "0" +
                        Math.min(
                            255,
                            Math.max(0, parseInt(color, 16) + amount)
                        ).toString(16)
                    ).substr(-2)
                )
        );
    },
    flattenObject: (ob) => {
        var toReturn = "";
        for (var a in ob) {
            toReturn += a + " ";
            if (typeof ob[a] == "object" && ob[a] !== null) {
                toReturn += "{" + "\n";
                for (var b in ob[a]) {
                    var output = ob[a][b];
                    if (_.isObject(ob[a][b])) {
                        output = "\t{" + "\n";
                        for (var c in ob[a][b]) {
                            output += "\t\t" + c + ": " + ob[a][b][c] + ";\n";
                        }
                        output += "\t}" + "\n";
                    }
                    if (b.substring(0, 2) === "--") {
                        toReturn += "\t" + b + ": " + output + ";\n";
                    } else if (b.indexOf("%") !== -1) {
                        toReturn += "\t" + b + " " + output;
                    } else {
                        toReturn += "\t" + paramCase(b) + ": " + output + ";\n";
                    }
                }
                toReturn += "}" + "\n";
            }
            toReturn += "\n";
        }
        return toReturn;
    },
};
