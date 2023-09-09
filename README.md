# Waves shop

A simple marketplace that allows users to add products to their carts and pay for them at checkout. 

## Technologies
- GraphQL
- Apollo Client
- Vite
- Typescript
- React
- Prettier
- ESLint
- CSS
- JWTs

## Scripts

```
yarn dev
```
Start dev server, aliases: `vite dev`, `vite serve`

```
yarn build
```
Build for production

```
yarn lint
```
Check for code style issues.

```
yarn format
```
Apply prettier styles to code base.

```
yarn dev
```
Locally preview production build (Requires you to build your application)

## Setup

To set up the project you will need to run the following command: 

```
yarn install
```

## Project structure

We use modules for the subdirectories, resulting in using barrel exports.
The `src` has the following structure:

```
 src/
├─ components/              # React components (exclusive of layout components)
├─ contexts/                # React contexts and context providers
├─ hooks/                   # custom hooks used by components
├─ layouts/                 # layout components used to structure pages
├─ lib/                     # business logic i.e. gql queries
├─ pages/                   # page components linked to specific paths
│  ├─ hooks/                # custom hooks used by components in page directory
│  ├─ ui/                   # components in page directory
│  ├─ types.ts              # types used in page directory
│  ├─ index.tsx             # the page component code
│  ├─ styles.module.css     # the styles used by components in page directory
├─ app.tsx                  # Main app
├─ constants.ts             # Shared JS constants used in code base
├─ dummy-data.ts            # Example data that can be used to test components
├─ main.tsx                 # Similar to index.tsx (for React)
├─ styles.css               # Global CSS styles used everywhere. Imported in index.css
├─ utilities.ts             # helper functions
├─ vite-env.d.ts            # Used to add env var types
```

## Code style

1. Use functional-based components.
2. Use named exports and imports whenever you can.
3. Try to follow conventions.


