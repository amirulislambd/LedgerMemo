# LedgerMemo

# Development Guidelines

---

# Purpose

This document defines the development standards for LedgerMemo so that implementation remains consistent, maintainable, and understandable.

These guidelines are especially important because the project may be built and extended by both human developers and AI-assisted agents.

---

# Core Development Principles

## Build for clarity

Prefer straightforward code over clever code.

## Keep business logic explicit

Business rules should be easy to understand and located in predictable places.

## Separate UI from domain logic

Do not mix display behavior and business rules in the same place unless necessary.

## Document important decisions

If a change introduces a new business rule, workflow, or architecture decision, document it.

## Prefer small, reviewable changes

Large changes should be broken into smaller tasks.

---

# Coding Expectations

## Use TypeScript consistently

Type definitions should be used where possible to reduce ambiguity.

## Keep components focused

Each component should have a single clear responsibility.

## Keep functions small

Functions should be easy to test and reason about.

## Avoid duplicate logic

If code is reused in multiple places, extract it into a shared helper or module.

---

# Project Workflow Expectations

## Start from requirements

Every implementation should trace back to a documented requirement or user need.

## Validate before considering complete

Do not consider a task finished without checking the relevant behavior.

## Keep the docs aligned

If implementation changes the product direction, update the relevant docs.

---

# AI Implementation Rules

When working with AI-generated implementation:
- keep the task scoped
- prefer clear prompts and explicit requirements
- avoid hidden assumptions
- ensure the generated code fits the documented architecture
- maintain consistency with existing patterns

---

# Quality Bar

Every implementation should ideally be:
- simple
- readable
- testable
- secure
- maintainable

---

# Final Note

The project should remain understandable even when many contributors or AI agents work on it over time.
