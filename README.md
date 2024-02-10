# Astro HTMX Template

## Installation

### Create a New Astro Project
In your project folder, initialize a new Astro project:
`npm create astro@latest .`

### Add Tailwind CSS
Use Astro's integration command to add Tailwind CSS:
`npx astro add tailwind`

### Install htmx and Astro-HTMX Integration
To add dynamic capabilities with htmx:
`npm install htmx.org astro-htmx`

### Configure `astro.config.mjs`
Update your `astro.config.mjs` to include the Tailwind and htmx integrations. Your configuration should look like this:
```
import { defineConfig } from 'astro/config';
import htmx from 'astro-htmx';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind(), htmx()],
  output: 'server'
});
```

### Optional: Add Fonts
Now is a good time to add your fonts. Here's how to remove and then add fonts:
`npm uninstall @fontsource-variable/oswald @fontsource-variable/lato @fontsource-variable/roboto`

### Update base.css
Create or update your `base.css` ideally in `src/styles` with the following content:
```
@import "@fontsource/oswald";
@import "@fontsource/lato";
@import "@fontsource/roboto";

@tailwind base;
@tailwind components;
@tailwind utilities;
```

For a better development experience, you can configure your editor to recognize CSS files with Tailwind directives by creating or editing `.vscode/settings.json`:
```
{
  "files.associations": {
    "*.css": "tailwindcss"
  }
}
```

### Styles in Layout.astro
To apply your styles globally, import `base.css` in your `Layout.astro`:
`import "../styles/base.css";`

## Project Structure
The project structure is as follows:
```
.
├── astro.config.mjs
├── package.json
├── package-lock.json
├── public
│   ├── favicon.svg
│   └── img
│       └── gabriel-cavedal.jpg
├── README.md
├── src
│   ├── components
│   │   └── Header.astro
│   ├── env.d.ts
│   ├── layouts
│   │   └── Layout.astro
│   ├── pages
│   │   └── index.astro
│   └── styles
│       └── base.css
├── tailwind.config.mjs
└── tsconfig.json
```
(+node_modules...)

## Tailwind Configuration
Tailwind configuration to customize the theme:
```
export default {
   content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
   theme: {
      extend: {},
      fontFamily: {
         lato: ["Lato", "sans-serif"],
         roboto: ["Roboto", "sans-serif"],
         oswald: ["Oswald", "sans-serif"],
      },
      colors: {
         mate: {
            50: "#f0f2f0",
            100: "#e2e6e1",
            200: "#c5cdc4",
            300: "#a7b3a6",
            400: "#8a9a89",
            500: "#6d816b",
            600: "#576756",
            700: "#414d40",
            800: "#2c342b",
            900: "#161a15",
         },
         pullover: {
            50: "#f0eeed",
            100: "#e1dedb",
            200: "#c3bcb8",
            300: "#a59b94",
            400: "#877971",
            500: "#69584d",
            600: "#54463e",
            700: "#3f352e",
            800: "#2a231f",
            900: "#15120f",
         },
      },
   },
   plugins: [],
};
```
