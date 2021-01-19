# Tailwind CSS Plugin for dynamic generated shades for your customized color palettes

This Tailwind CSS plugin generates all shade variants and utilities for your customized color palette.

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
        require('@markusantonwolf/tailwind-css-plugin-custom-color-palette')({
            colors: {
                teal: '#408075',
                moreColors: '#FF00FF',
            },
            variants: ["responsive"],
            steps: 100,
        }),
    ]
}
```

### 3. Use it > 🌮

## Usage

**The Tailwind CSS Custom Color Palette plugin generates all new utilities like `.bg-teal-400`, `.text-teal-200` or `.border-teal-700` based on your defined colors.**

By Default this Multi Column plugin uses your theme and colors so you don't have to redefine your settings. Variants apply for columns and column rules - default variant is "responsive". To change rendered variants add your configuration to the required plugin:

```js
// tailwind.config.js
module.exports = {
    // ...
    plugins: [
        require('@markusantonwolf/tailwind-css-plugin-multi-columns')({
            variants: ["responsive", "dark"],
        }),
    ]
}
```

You can learn more about all configurations in: [More configurations](#user-content-more-configurations). You can find all variants in the Tailwind CSS documentation: [Tailwind CSS - Configuring Variants](https://tailwindcss.com/docs/configuring-variants). 

## Examples

```html
<div class="column-2 column-gap-12 rule rule-dashed rule-gray-500">
    <!-- Content -->
</div>
```

```html
<div class="sm:column-2 xl:column-3 sm:column-gap-12 xl:column-gap-24 rule xl:rule-2 rule-dashed rule-gray-900 rule-opacity-50">
    <!-- Content -->
</div>
```

```html
<div class="md:column-2 xl:column-3 2xl:column-4 column-gap-12 xl:rule-2 rule-dotted rule-gray-300">
    <!-- Content -->
</div>
```

With this Tailwind CSS Plugin you can easily the following multi-column properties:

- column-count
- column-gap
- column-rule-style
- column-rule-width
- column-rule-color
- column-rule
- column-span
- column-width

**You can find a list of all generated utilities here - [All Multi Column utilities](https://github.com/markusantonwolf/tailwind-css-plugin-multi-columns/blob/master/dist/multi-columns.css)**

## More configurations

In the following example you can see all available options (default values) for the Multi Column plugin. The params `variants`, `styles` and `columns` are replacing the configuration and the other params will get merged with your Tailwind CSS theme.

```js
// tailwind.config.js
module.exports = {
    // ...
    plugins: [
        require('@markusantonwolf/tailwind-css-plugin-multi-columns')({
            variants: ["responsive"], // replaces definitions
            styles: ["dotted", "solid", "dashed"], // replaces definitions
            columns: ["2", "3", "4", "5", "6", "7", "8", "9"], // replaces definitions
            span: [], // merges definitions
            gaps: [], // merges definitions
            spacing: [], // merges definitions
            colors: [], // merges definitions
            borderWidth: [], // merges definitions
            opacity: [], // merges definitions
        }),
    ]
}
```

## Licence

Tailwind CSS Plugin Filter utilities is released under the [MIT license](https://github.com/markusantonwolf/tailwind-css-plugin-multi-columns/blob/master/licence.md) & supports modern environments.

## Copyright

© 2020 Markus A. Wolf
<https://www.markusantonwolf.com>
