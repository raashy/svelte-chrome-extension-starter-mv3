# Svelte Chrome Extension Starter Template with Manifest V3 🚀

> *Note: This Svelte Chrome Extension Starter Template makes building extensions with Manifest V3 and Svelte a breeze!*


## Introduction

Hey there! I'm Rahit, and I've been working with Svelte to develop web apps for quite some time now. Recently, I encountered the challenge of building a Chrome extension using Svelte, only to discover that it can be quite tricky with the default Svelte or SvelteKit configuration.

After conducting several experiments and tinkering around, I've managed to create my very own working solution. This template is fully compatible with Manifest V3 and seamlessly integrates Svelte, making the process of building Chrome extensions a breeze.

## Key Features

Here's what you can expect from this starter project:

- Out-of-the-box configuration for background script, content script, popup, and new tab pages.
- TypeScript, Tailwind CSS, and PostCSS are pre-configured, allowing you to jump right into development.
- A starter manifest file is included, providing a foundation for customizing your extension.
- An esbuild config file is provided, enabling the creation of self-contained Svelte components without the need for separate HTML files.


## Getting Started

Follow these steps to get started with your Svelte Chrome extension:

1. Clone this repository to your local machine.
2. Run `pnpm i` to install the project dependencies.

Next, you'll need to make some edits to the following files:

- Background script/Service Worker: `src/background/background.ts`
- Content script: `src/content/Content.svelte`
- New Tab: `src/content/NewTab.svelte`
- Popup: `src/content/Popup.svelte`
- Manifest: `public/manifest.json` (Update the manifest with the necessary information for your extension)


## Building the Extension

To build your project, follow these steps:

1. Run `pnpm run build` to compile the project.
2. The final build will be located in the `/build` directory.
3. During development, while in Chrome's developer mode, select the build folder when installing the extension.

## Local Testing

For local testing and debugging purposes, use the following steps:

1. Run `pnpm run build --watch` to continuously build the project whenever any file changes occur.
2. If you make changes to the manifest, remember to reload your Chrome extension.
3. Alternatively, you can run `pnpm run dev` to start a local server.
4. Access `/popup.html`, `/content.html`, or `/newtab.html` in your browser to view the rendered content.
5. Please note that Chrome APIs will not work when using the development server.

## Additional Notes

Here are a few additional details and customization options to consider:

- By default, the content script injects HTML inside a Shadow DOM, just before the head. Modify the `content.ts` file to change this behavior.
- If you prefer not to use the Shadow DOM, set `useShadowDom` to `false`.

That's it! You're all set to build your awesome Chrome extension using Svelte and Manifest V3. Happy coding! 🎉
