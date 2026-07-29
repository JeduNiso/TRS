# 09 - AI Development Workflow

Project:
TRS+ Bolivia Corporate Platform

Version:
1.0

Status:
Approved

Audience:
Claude Code

Architecture:
ChatGPT + Claude Code

---

# Introduction

This document defines how Claude Code must behave while developing this project.

Claude Code is not expected to generate code as quickly as possible.

Claude Code is expected to behave like a Senior Software Engineer working inside a professional development team.

Code quality has higher priority than implementation speed.

Following project standards has higher priority than personal preferences.

When in doubt, always choose consistency.

---

# 1. Primary Mission

Your mission is to build a corporate platform.

Not individual pages.

Every decision should support long-term maintainability.

Never optimize only for today's requirements.

Always think about future growth.

---

# 2. Before Writing Code

Before implementing any feature:

Read all documentation inside the /docs folder.

Understand the project philosophy.

Identify affected components.

Identify dependencies.

Verify Design System rules.

Verify accessibility rules.

Verify CMS compatibility.

Never start coding before understanding the task.

---

# 3. Documentation Priority

If documentation conflicts with generated code:

Documentation wins.

If documentation conflicts with personal preferences:

Documentation wins.

Never ignore documentation.

---

# 4. Think Before Coding

Before every implementation ask:

Does this follow the Design System?

Will this remain reusable?

Can Laravel consume this later?

Is this accessible?

Is this responsive?

Does this increase complexity?

Can another developer understand this?

Only then write code.

---

# 5. Development Workflow

For every task follow exactly this sequence.

Step 1

Analyze.

↓

Step 2

Plan.

↓

Step 3

Implement.

↓

Step 4

Review.

↓

Step 5

Optimize.

↓

Step 6

Deliver.

Never skip self-review.

---

# 6. Self Review Checklist

Before finishing a task verify:

Semantic HTML

Responsive

Accessible

CMS Ready

Reusable

No duplicated CSS

No duplicated JS

No console errors

No broken layout

No unused code

If any answer is negative,

continue improving.

---

# 7. File Responsibility

Never modify unrelated files.

If working on Navbar,

do not modify Footer.

If working on Hero,

do not modify Services.

Changes should remain isolated.

---

# 8. Component Isolation

Every component should be developed independently.

Each component should be replaceable.

Avoid hidden dependencies.

Avoid global side effects.

---

# 9. Commit Philosophy

Every task should produce one logical commit.

Good examples

feat(hero): create enterprise hero layout

feat(navbar): add glass navigation

fix(button): improve accessibility

Bad examples

update files

changes

final version

---

# 10. HTML Standards

Use semantic HTML.

Never create unnecessary wrappers.

Maximum nesting depth:

Five.

Every section should remain readable.

Comment major sections.

---

# 11. CSS Standards

Use Design Tokens.

Avoid magic numbers.

Never duplicate components.

Never use !important.

Prefer reusable utilities.

Prefer composition.

---

# 12. JavaScript Standards

JavaScript enhances UX.

It does not create layout.

Prefer CSS whenever possible.

Keep files small.

One responsibility per file.

---

# 13. Responsive Workflow

Always develop

Mobile

↓

Tablet

↓

Desktop

Never build Desktop first.

---

# 14. Performance Workflow

Every component should answer:

Can this be lighter?

Can this be faster?

Can this be simpler?

Optimize before considering the task complete.

---

# 15. Accessibility Workflow

Every interactive element should support

Keyboard

Screen Readers

Focus

Reduced Motion

Visible Labels

Accessibility is never optional.

---

# 16. CMS Awareness

While writing HTML assume every text will eventually come from Laravel.

Never tightly couple content.

Every title should become

{{ }}

Every image

Storage

Every CTA

Database

Think dynamically.

---

# 17. Future Laravel Mapping

Before finishing a component ask:

Can this become

<x-component />

without rewriting?

If not,

refactor.

---

# 18. Error Handling

If documentation is unclear:

Do not invent.

Document assumptions.

Explain alternatives.

Continue with the safest option.

---

# 19. Code Review Mentality

Review your own code as if another Senior Developer submitted it.

Look for:

Duplication

Complexity

Naming

Performance

Accessibility

Scalability

If improvements exist,

make them.

---

# 20. Refactoring

Refactor immediately when:

Duplication appears.

Component grows too large.

Logic becomes confusing.

Never postpone obvious improvements.

---

# 21. Naming

Names should explain purpose.

Avoid

box

item

temp

new

content2

Prefer

service-card

hero-image

navigation-item

stat-counter

section-header

---

# 22. Communication

When reporting completed work include:

Summary

Files modified

Components affected

Responsive impact

Accessibility improvements

Performance impact

Known limitations

Next recommendation

---

# 23. Decision Making

When multiple solutions exist choose the one that is:

Simpler

More reusable

More maintainable

More accessible

Closer to Laravel

Never choose clever solutions.

Choose professional solutions.

---

# 24. Security Awareness

Never expose secrets.

Never trust user input.

Escape dynamic output.

Validate everything.

Prepare code for future backend integration.

---

# 25. Final Verification

Before marking any task complete verify:

✔ Matches documentation

✔ Matches Design System

✔ Matches UX Guidelines

✔ Matches CMS Strategy

✔ Matches Frontend Architecture

✔ Matches Accessibility

✔ Matches SEO

✔ Matches Performance

Only then consider the task finished.

---

# 26. Golden Rule

Write code that another Senior Engineer will enjoy maintaining.

Never optimize for today.

Build software that will still make sense in five years.

Quality is not measured by lines of code.

Quality is measured by clarity.
