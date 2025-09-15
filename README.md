# Cocktail Assistant

Tiny app to gather a shopping list for multiple cocktails.
A small Haunted + lit-html app to search cocktails and build a deduplicated shopping list.

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

## Architecture

- State is managed in a central `Store` module, inspired by Redux-like patterns.  
- Components (e.g. results, shopping list, toaster) subscribe to the store with Haunted hooks, so updates automatically trigger re-renders.  
- This keeps data flow simple: `SearchPanel` queries → updates `Store` → all other components reactively update.

## Insights

- For production I would scope styles properly with Shadow DOM and component-local CSS.  
- In this test I demonstrated two different approaches:
  1. Most components use `CSSStyleSheet` + `adoptedStyleSheets` for scoped styles (including print-specific rules in the shopping list).  
  2. Some components (like the toaster) use an inline `<style>` block for very localized styling.  
- Shadow DOM is intentionally disabled on one component (`cocktail-results`) to make it easier to apply global layout styles during the test.

## Quick start

```bash
git clone <repo-url>
cd cocktail-assistant
npm install
npm start
