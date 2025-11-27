# 🚀 React 19 + Vite + TypeScript Boilerplate (WCAG & Enforced)

This repository serves as a foundational boilerplate for building modern, high-performance web applications, featuring a clean chat UI skeleton styled after Gemini/ChatGPT.

It uses the latest stable tools and adheres to high standards for performance, type safety, accessibility (WCAG 2.2), and code consistency.

## 🛠️ Technology Stack Overview

| Category           | Key Package             | Why It Was Chosen                                                                                                                                                                                      |
| ------------------ | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Core Framework** | **React 19**            | **The Latest Standard.** Provides modern features like Server Components, built-in Actions, and new hooks (useActionState, useOptimistic), ensuring the codebase is current and performance-optimized. |
| **Build Tool**     | **Vite**                | **Speed.** Replaces older tools like Webpack/CRA for near-instant server startup and Hot Module Replacement (HMR) during development, drastically improving developer experience (DX).                 |
| **Language**       | **TypeScript**          | **Type Safety.** Adds static typing to JavaScript, catching errors during development rather than runtime. Essential for large, maintainable applications.                                             |
| **UI Library**     | **Material UI (MUI)**   | **Components & Styling.** Provides a vast, accessible library of pre-built components and a powerful theming system, significantly accelerating UI development.                                        |
| **Styling/Design** | **WCAG 2.2 Dark Theme** | **Accessibility.** The custom dark theme is built specifically to meet **WCAG 2.2 AA** contrast and target size requirements, ensuring the application is inclusive from day one.                      |
| **Iconography**    | **Font Awesome**        | **Flexibility.** Provides a massive, consistent library of icons that can be easily imported as SVG components, replacing basic image assets.                                                          |

## ⚙️ Code Quality & Enforcement

This project implements a comprehensive two-stage enforcement system to guarantee all code is formatted consistently and meets project quality standards.

| Tool            | Role                  | Enforcement Method                                                                                                                                                                                |
| --------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ESLint**      | **Code Quality**      | Analyzes code for correctness, potential bugs, and bad practices (e.g., forgotten hook dependencies).                                                                                             |
| **Prettier**    | **Code Formatting**   | Handles all stylistic rules (e.g., quotes, spacing, semicolons). **eslint-config-prettier** is used to disable all conflicting ESLint style rules, allowing Prettier to handle style exclusively. |
| **Husky**       | **Git Hooks**         | Sets up a Git hook that runs automatically before every commit.                                                                                                                                   |
| **lint-staged** | **Pre-Commit Filter** | Ensures that ESLint and Prettier only run on files that have been staged (git add .), keeping commit times fast.                                                                                  |

## ⭐ Recommended Editor Setup (VS Code)

To ensure automatic formatting and fixing upon save, please install the following extensions and confirm the project's **.vscode/settings.json** is active:

1. **Prettier - Code formatter** (esbenp.prettier-vscode)

2. **ESLint** (dbaeumer.vscode-eslint)
