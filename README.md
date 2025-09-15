# Cocktail Assistant

Tiny app to gather a shopping list for multiple cocktails.

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

## Insights

- For production I would scope styles properly with Shadow DOM and component-local CSS.  
- In this test I demonstrated two different approaches:
  1. Most components use `CSSStyleSheet` + `adoptedStyleSheets` for scoped styles (including print-specific rules in the shopping list).  
  2. Some components (like the toaster) use an inline `<style>` block for very localized styling.  
- Shadow DOM is disabled on one component (like `cocktail-results`) to simplify global layout styling via `main.css`.

## Quick start

```bash
git clone <repo-url>
cd cocktail-assistant
npm install
npm start
