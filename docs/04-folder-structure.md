# LedgerMemo

# Folder Structure

---

# Purpose

This document defines the official project structure for LedgerMemo so that implementation work can be added in a predictable and maintainable way.

The goal is to make the codebase easy to understand for both human developers and AI-assisted coding agents. Every new feature should fit into the structure without requiring a full project review.

---

# Core Rule

Keep the application organized by responsibility.

- UI and page composition belong in the app and components layers.
- Business features belong in the features layer.
- Shared infrastructure belongs in lib, services, hooks, and utils.
- Types and domain models belong in types.

---

# Recommended Structure

## App Layer

The app folder contains route-level pages and global layout setup.

Responsibilities:
- Page entry points
- Route-level layout
- Global providers
- Root styling and metadata

Use this layer for composition only. Avoid placing business logic here.

---

## Components Layer

The components folder is split into reusable UI building blocks.

Suggested subfolders:
- common: generic shared components
- forms: reusable form fields and form sections
- layout: page shell, navigation, containers
- ui: primitive UI elements such as buttons, cards, dialogs, tables

Use this layer for reusable presentation components only.

---

## Features Layer

The features folder contains domain-specific modules.

Suggested modules:
- auth
- customers
- dashboard
- inventory
- invoices
- products
- reports
- sales
- settings
- shop
- voice-sales

Each feature should contain the screens, widgets, and domain logic needed for that business capability.

If a new business capability is introduced, create a new feature folder instead of placing it in the root.

---

## Services Layer

The services folder contains integration and infrastructure logic.

Suggested subfolders:
- ai: speech recognition, natural language understanding, structured extraction
- api: backend communication and API client wrappers
- auth: authentication helpers, token handling, session management
- storage: file or local persistence helpers

This layer should not contain UI code.

---

## Shared Infrastructure

Other shared areas:
- hooks: reusable React hooks
- lib: shared helpers, constants, validators, config utilities
- types: shared TypeScript types and interfaces
- utils: general-purpose utility functions
- stor: persistent storage helpers if needed

---

# Implementation Rules

## Rule 1: Feature-first organization

Each business module should live under src/features/<module>.

## Rule 2: Keep UI and logic separate

- UI components should be presentational.
- Business rules should live in services, hooks, or feature-level logic.

## Rule 3: Avoid cross-feature coupling

A feature should not depend directly on another feature unless absolutely necessary.

## Rule 4: Shared code must be promoted upward

If logic is reused across multiple features, move it to a shared location such as lib, hooks, or services.

---

# Quick Guidance for New Work

When implementing a new task:

1. Identify the feature area.
2. Place the UI under the matching feature folder or components subfolder.
3. Put API and integration logic in services.
4. Put reusable logic in hooks, lib, or utils.
5. Add shared types under types.

---

# AI-Friendly Implementation Note

If an AI agent is asked to implement a task, it should be able to find the appropriate location by following this structure without reading the entire repository.

The expected path should usually be one of the following:
- UI change: src/features/<feature>/...
- Shared UI: src/components/...
- API integration: src/services/api/...
- AI workflow: src/services/ai/...
- Auth flow: src/services/auth/...
