const fs = require("fs");
const postcss = require("postcss");
const tailwind = require("tailwindcss");
const CleanCSS = require("clean-css");

function buildDistFile() {
    return new Promise((resolve, reject) => {
        return postcss([
            tailwind({
                theme: {
                    container: {
                        center: true,
                    },
                },
                plugins: [
                    require("../src/index.js")({
                        colors: {
                            teal: '#408075',
                            favorite: '#c23d81',
                        },
                        variants: ["responsive"],
                        steps: 50,
                    }),
                ],
            }),
            require("autoprefixer"),
        ])
            .process(
                `
@tailwind base;
@tailwind components;
@tailwind utilities;
      `,
                {
                    from: undefined,
                    to: `./public/tailwind-custom-color-palette.css`,
                    map: { inline: false },
                }
            )
            .then((result) => {
                fs.writeFileSync(
                    `./public/tailwind-custom-color-palette.css`,
                    result.css
                );
                return result;
            })
            .then((result) => {
                const minified = new CleanCSS().minify(result.css);
                fs.writeFileSync(
                    `./public/tailwind-custom-color-palette.min.css`,
                    minified.styles
                );
            })
            .then(resolve)
            .catch((error) => {
                console.log(error);
                reject();
            });
    });
}

console.info("Compiling build...");

Promise.all([buildDistFile()]).then(() => {
    console.log("Finished.");
});
