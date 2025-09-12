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

## Insights and explanations
- “For a production app I’d scope styles properly with Shadow DOM and component-local CSS. For this test I’ve disabled Shadow DOM for a few components to share a single global stylesheet.”

## Quick start

```bash
git clone <repo-url>
cd cocktail-assistant
npm install
npm start
