# Tailwind CSS Custom Color Palette

**This Plugin generates a color palette and all utilities based on your custom colors. New utilities like `text-yourColor-100` or `bg-yourColor-600` will be rendered for your custom colors.**

**Compatibility: Tailwind CSS ^1.8.3 and ^2.X.**

## Installation

### 1. Install the Tailwind CSS Custom Color Palette plugin:

```bash
# Install using npm
npm install --save-dev @markusantonwolf/tailwind-css-plugin-custom-color-palette

# Install using yarn
yarn add -D @markusantonwolf/tailwind-css-plugin-custom-color-palette
```

### 2. Add it to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
    // ...
    theme: {
        customColorPalette: {
            colors: {
                teal: "#408075", // add more colors to the plugin
            },
        },
    }
    // ...
    plugins: [
        require("@markusantonwolf/tailwind-css-plugin-custom-color-palette"),
    ],
};
```

### 3. Use it > 🌮

## Usage

The Tailwind CSS Custom Color Palette plugin generates new utilities like `.bg-yourColor-400`, `.text-yourColor-200` or `.border-yourColor-700` based on your defined colors. Every color you defined will be used as -500 variante in the palette.

### Examples

```html
<h1 class="text-yourColor-600">
    <!-- Content -->
</h1>
```

```html
<div class="bg-yourColor-200 p-8 border-2 border-yourColor-700 border-dashed">
    <!-- Content -->
</div>
```

```html
<div class="bg-gradient-to-b from-yourColor-100 to-yourColor-200">
    <!-- Content -->
</div>
```

**You can find a list of all generated utilities based on the default settings here - [Custom Color utilities](https://github.com/markusantonwolf/tailwind-css-plugin-custom-color-palette/blob/master/dist/custom-color-palette.css)**

### Configuration

In the following example you can see all available options (default values) for the Custom Color Palette plugin. To add your own configuration add ```customColorPalette```to ```theme```and ```variants```. Your new settings will be merged with the default settings. To change the plugin behaviour in terms of how it adds the new classes as utilities you can add these options as objects to the default function.

```js
// tailwind.config.js
module.exports = {
    // ...
    theme: {
        // ...
        customColorPalette: {
            colors: {
                teal: "#408075", // add more colors to the plugin
            },
            utilities: {
                textColor: true, // render text color utilities: true (default) | false
                backgroundColor: true, // render background color utilities: true (default) | false
                borderColor: true, // render border color utilities: true (default) | false
                gradientColorStops: true, // render gradient color utilities: true (default) | false
                placeholderColor: true, // render placeholder color utilities: true (default) | false
                divideColor: true, // render divide color utilities: true (default) | false
                ringColor: true, // render ring color utilities: true (default) | false
                ringOffsetColor: true, // render ring offset color utilities: true (default) | false
            },
            steps: 100, // define the steps between each shade: 100 (default) | 50
            calculation: "relative", // change color calculation: relative (default) | linear
        },
        // ...
    },
    variants: {
        // ...
        customColorPalette: ["responsive", "hover", "active", "focus"],
        // ...
    },
    plugins: [
        require("@markusantonwolf/ta-youtube")({
            respectPrefix: true, // respect prefix option in config: true (default) | false 
            respectImportant: true, // respect important option in config: true (default) | false 
        }),
    ],
    // ...
};
```

You can find all available variants in the Tailwind CSS documentation: [Tailwind CSS - Configuring Variants](https://tailwindcss.com/docs/configuring-variants).

## Licence

Tailwind CSS Plugin Filter utilities is released under the [MIT license](https://github.com/markusantonwolf/tailwind-css-plugin-custom-color-palette/blob/master/licence.md) & supports modern environments.

## Copyright

© 2020 Markus A. Wolf
<https://www.markusantonwolf.com/en>
