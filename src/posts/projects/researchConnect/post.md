---
title: University Projects Blackboard
descr: This is the description for this uni project
tags: TypeScript, Next.js, SCSS, Supabase, React-Hook-Form, Zustand
date: 7th June, 2025
thumbnail: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz-Ib4uCztJBiBwaDiEsD4dKzUOlkgP_YRvQ&s
---

# Research Connect - University Projects Blackboard

## Project Background

## Static Previews

## TechStack

### TypeScript

### Next.js

### SCSS

### Supabase

### React-Hook-Form

### Zustand

## Challenges and Solutions

### Cluttered Codebase

With every new feature that we were tasked to add to the application the codebase began to become more cluttered and chaotic.

As being the one speerheading the project it was up to me to make the calls and structure the code. This proved to be more challenging than expected, as I had never worked on such a big project and having only very little time available.

One of the biggest files were the ones containing the Forms, such as `ListingForm.tsx` as it handles both the creation and editing of the listings:

```js
//old code here
```

This was the folder structure for the `ListingForm` component.

```js
//old folder structure
```

It becomes clear that the component is doing way too much:

- Form rendering
- Business logic
- Data fetching
- State synchronization

So I dedicated half a day to refactor the entire codebase and tackle tech dept:

- Split into subcomponents to increase reusability and readability
- Create custom hooks to handle fetches and form state
- Create utilities to handle business logic
- Co-locate component-specific files under the same folder
- Improve error handling by working with try-catch blocks instead of if-else blocks

My goal was to improve code maintainability by aiming for:

- separation of concerns
- code readability
- code reusability

This is the new folder structure:

```js

```

This is the same file `ListingForm.tsx` after intense refactoring:

```js

```

I stored the other utilities in `utils.ts` in the same folder:

```js

```

The fetching of the form data is handled in the `useFormSetup.ts` file in the same folder:

```js

```

Overall I am very happy that I managed to refactor the codebase to that extend and I feel confident that this is better than the state it was in before that. There's certainly still room for improvement.

## Learnings
