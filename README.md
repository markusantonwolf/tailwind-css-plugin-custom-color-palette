# Tailwind CSS Plugin for dynamic generated variants for your customized color palettes

This Tailwind CSS plugin generates all shade variants from -50 to -950 and utilities for your customized color palette.

**Compatibility: Tailwind CSS 1.9.6 and ^2.X.**

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
    plugins: [
        require("@markusantonwolf/tailwind-css-plugin-custom-color-palette")({
            colors: {
                yourColor: "#408075",
            },
        }),
    ],
};
```

### 3. Use it > 🌮

## Usage

**The Tailwind CSS Custom Color Palette plugin generates new utilities like `.bg-teal-400`, `.text-teal-200` or `.border-teal-700` based on your defined colors.**

You can learn more about all configurations in: [More configurations](#user-content-more-configurations). You can find all variants in the Tailwind CSS documentation: [Tailwind CSS - Configuring Variants](https://tailwindcss.com/docs/configuring-variants).

### Examples

```html
<h1 class="text-teal-600">
    <!-- Content -->
</h1>
```

```html
<div class="bg-teal-400 p-8 border-2 border-teal-300 border-dashed">
    <!-- Content -->
</div>
```

```html
<div class="bg-gradient-to-b from-teal-100 to-teal-200">
    <!-- Content -->
</div>
```

**You can find a list of all generated utilities based on the default settings here - [Custom Color utilities](https://github.com/markusantonwolf/tailwind-css-plugin-custom-color-palette/blob/master/dist/custom-color-palette.css)**

### Configurations

In the following example you can see all available options (default values) for the Custom Color Palette plugin. To overwrite the default object like `variants` are your own settings to the plugin. Your new settings will get merged with the default settings.

```js
// tailwind.config.js
module.exports = {
    // ...
    plugins: [
        require("@markusantonwolf/ta-youtube")({
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
            variants: ["responsive"], // default variante is responsive
            steps: 100, // define the steps between each shade: 100 (default) | 50
            calculation: "relative", // change color calulation: relative (default) | linear
        }),
    ],
};
```

## Licence

Tailwind CSS Plugin Filter utilities is released under the [MIT license](https://github.com/markusantonwolf/tailwind-css-plugin-multi-columns/blob/master/licence.md) & supports modern environments.

## Copyright

© 2020 Markus A. Wolf
<https://www.markusantonwolf.com>
