# Cocktail Assistant

Tiny app to gather a shopping list for multiple cocktails.  
A small Haunted + lit-html app to search cocktails and build a deduplicated shopping list.

👉 **Live demo:** https://jesperhagman.github.io/Cocktail-Assistant/

## Features

- 🔍 Search cocktails via [TheCocktailDB API](https://www.thecocktaildb.com/)
- 📋 Results listing with **thumbnail, name, instructions, and "Add to shopping list"** button
- 🛒 Shopping list that **deduplicates ingredients** across cocktails
- 🖨️ Print shopping list (browser print dialog, only the list is printed)
- 🍞 Toaster messages for UI feedback:
  - "Searching..."
  - "Here are the results."
  - "No results found."
  - "Ingredients added to shopping list."
  - "Ingredient removed from shopping list."

## Tech stack

- [Haunted](https://github.com/matthewp/haunted) (web components + hooks)
- [lit-html](https://lit.dev/) for rendering
- Native [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) for API calls
- TypeScript
- [Parcel](https://parceljs.org/) bundler for dev/build
- Deployed with **GitHub Pages**

## Architecture

- State is managed in a central `Store` module, inspired by Redux-like patterns.
- Components (e.g. results, shopping list, toaster) subscribe to the store with Haunted hooks, so updates automatically trigger re-renders.
- This keeps data flow simple: `SearchPanel` queries → updates `Store` → all other components reactively update.

## Insights

- Components use **Shadow DOM with `CSSStyleSheet` + `adoptedStyleSheets`** for scoped styles.
- A single global `main.css` handles **layout and shared styles** (grid, body background, responsive tweaks).
- The shopping list includes **scoped print rules** in its own stylesheet (e.g. hiding buttons when printing).
- This separation keeps component styles encapsulated, while allowing global layout to remain flexible.

## Quick start

```bash
git clone <repo-url>
cd cocktail-assistant
npm install
npm start
```