# Cocktail Assistant
Tiny app to gather a shopping list for multiple cocktails.

## Features

- Search cocktails (TheCocktailDB API)
- Results with thumbnail, name, instructions and "Add" button
- Shopping list that deduplicates ingredients across cocktails
- Print shopping list (browser print dialog)
- Toaster messages for UI feedback

## Tech

- Haunted (web components + hooks)
- lit-html for rendering
- Native `fetch` for API calls

## Quick start

```bash
git clone <repo-url>
cd cocktail-assistant
npm install
npm start
