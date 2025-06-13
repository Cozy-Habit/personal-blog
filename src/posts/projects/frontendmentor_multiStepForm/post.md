---
title: FrontendMentor Challenge - Multi-Step Form
description: This is the description for this FrontendMentor project
tags: TypeScript, Next.js, React-Hook-Form, Zustand
date: 7th June, 2025
thumbnail: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz-Ib4uCztJBiBwaDiEsD4dKzUOlkgP_YRvQ&s
---

# FrontendMentor Challenge - Multi-Step Form

## Project Background

## Static Previews

## TechStack

### TypeScript

### Next.js

### React-Hook-Form

### Zustand

## Challenges and Solutions

### State Management

I am using Zustand for persisting the state of the form data when the user reloads the page. I ran into the issue that store.persist.isHydrated is not available during the build process of the static pages. This also causes my checks for missing data on each form step to redirect to the previous form as it assumes that the respective data hasn't been filled in yet. Currently I don't know how to fix this, so this will be a todo in the future.

## Learnings
