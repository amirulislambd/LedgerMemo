# LedgerMemo

# AI Engine

---

# Purpose

This document defines the expected role of the AI engine in LedgerMemo.

The AI system should help convert natural business conversations into structured bookkeeping actions. It should not replace business validation or final business logic.

---

# Core Responsibilities

The AI engine should support:
- speech-to-text conversion
- understanding natural business language
- extracting structured transaction data
- identifying missing or ambiguous information
- preparing data for backend validation

---

# Expected AI Workflow

## 1. Voice Input

The user speaks naturally, such as:
- “5 kg rice sold to Rahim for 700 taka”
- “Customer Karim paid 1000 taka”

## 2. Speech Recognition

The system converts spoken input into text.

## 3. Intent Understanding

The AI interprets the meaning of the statement.
It should identify:
- action type
- product
- quantity
- customer
- amount
- payment status

## 4. Structured Extraction

The AI returns a structured result that can be passed to the backend.

## 5. Validation

The backend validates the extracted data before committing business changes.

---

# AI Design Principles

## Provider Independence

The AI layer should be abstracted so the system can change providers later without rewriting core business logic.

## Confidence Awareness

The AI should indicate whether it is confident about the interpretation.
If confidence is low, the system should request clarification.

## Human Oversight

The AI should assist, but the final business decision should remain under validation and business rules.

## Business Orientation

The AI should focus on business meaning rather than generic chat behavior.

---

# Expected Output Shape

The AI system should return structured information such as:
- action type
- product reference
- customer reference
- quantity
- amount
- currency
- payment status
- confidence score
- unresolved fields

---

# Implementation Guidance

When implementing AI features:
- keep the AI layer separate from core business logic
- validate AI output before any transaction is saved
- support fallback when AI cannot understand the input clearly
- keep prompts and extraction logic modular and testable
