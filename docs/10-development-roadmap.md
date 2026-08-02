# LedgerMemo

# Development Roadmap

---

# Purpose

This roadmap is designed to be used as a working checklist for LedgerMemo development.

Each task is broken into smaller units so progress can be tracked clearly and marked off one item at a time as work is completed.

---

# Progress Tracking System

Use the following checklist style for every task:

- [ ] Not started
- [x] Completed

When a task is finished, change it from `[ ]` to `[x]`.

---

# Working Rule for Each Task

Each task should follow this sequence:

1. Implement one small task only.
2. Review the result locally.
3. Run the app or relevant checks locally.
4. If everything works, commit the change to Git.
5. Only then move to the next task.

This keeps the development process controlled, easy to review, and safe to expand step by step.

---

# Phase 1: Foundation

## 1. Project Setup
- [ ] Initialize the project structure and confirm the folder layout
- [ ] Set up the base Next.js app shell
- [ ] Configure shared styling and theme foundation
- [ ] Create reusable base components

## 2. Authentication
- [ ] Create sign-in screen
- [ ] Create sign-out flow
- [ ] Protect private routes
- [ ] Add session handling and redirect behavior

## 3. Navigation and Layout
- [ ] Create main layout shell
- [ ] Create dashboard navigation
- [ ] Create mobile-friendly navigation structure
- [ ] Add loading and empty states for main screens

---

# Phase 2: Core Business Modules

## 4. Shop Management
- [ ] Create shop setup screen
- [ ] Allow shop details to be viewed
- [ ] Allow shop details to be edited
- [ ] Save shop information correctly

## 5. Product Management
- [ ] Create product list view
- [ ] Create add product form
- [ ] Create edit product form
- [ ] Add product validation rules
- [ ] Connect product data to storage or backend

## 6. Customer Management
- [ ] Create customer list view
- [ ] Create add customer form
- [ ] Create edit customer form
- [ ] Add customer search and filter support
- [ ] Connect customer data to storage or backend

## 7. Sales Entry
- [ ] Create sales entry screen
- [ ] Add sale item selection
- [ ] Add quantity and price handling
- [ ] Add payment status handling
- [ ] Save sales successfully
- [ ] Update inventory after sale

---

# Phase 3: Voice and AI Workflow

## 8. Voice Input
- [ ] Set up speech input entry point
- [ ] Capture spoken sales commands
- [ ] Convert speech to text
- [ ] Handle microphone errors gracefully

## 9. AI Understanding
- [ ] Send recognized text to AI processing
- [ ] Extract business intent from the text
- [ ] Extract product, customer, amount, and payment information
- [ ] Return structured transaction data

## 10. Validation and Confirmation
- [ ] Validate AI-generated transaction data
- [ ] Show confirmation before final save
- [ ] Allow correction of misread information
- [ ] Reject ambiguous or incomplete transactions

---

# Phase 4: Financial Operations

## 11. Invoices
- [ ] Create invoice generation flow
- [ ] Generate invoice after successful sale
- [ ] Display invoice preview
- [ ] Allow invoice print or export

## 12. Customer Ledger
- [ ] Create customer ledger view
- [ ] Record due and payment transactions
- [ ] Show outstanding balance clearly
- [ ] Keep ledger history accurate

## 13. Dashboard and Reports
- [ ] Create dashboard summary view
- [ ] Show daily sales summary
- [ ] Show inventory status summary
- [ ] Create reports page
- [ ] Add basic charts or summary tables

---

# Phase 5: Quality and Expansion

## 14. Reliability and Quality
- [ ] Improve error handling across the app
- [ ] Improve validation for all business forms
- [ ] Add consistent loading and success states
- [ ] Add basic testing for key flows

## 15. Future Expansion Preparation
- [ ] Prepare structure for purchases module
- [ ] Prepare structure for expenses module
- [ ] Prepare structure for suppliers and stock movement
- [ ] Prepare structure for multi-tenant or multi-branch support

---

# Recommended Execution Order

Build in this order:
1. Authentication
2. Shop and product management
3. Customer management
4. Sales entry
5. Inventory updates
6. Invoice and ledger
7. Voice and AI workflow
8. Dashboard and reports
9. Hardening and expansion

---

# Usage Note

Whenever a task is completed, mark it as done by changing `[ ]` to `[x]`.

This makes the roadmap act as both a plan and a live progress tracker.
