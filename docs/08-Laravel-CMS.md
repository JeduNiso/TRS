# 08 - Laravel CMS Architecture

Project:
TRS+ Bolivia Corporate Website

Version:
1.0

Status:
Approved

Framework

Laravel 12

PHP 8.4+

MySQL 8+

Blade Components

Livewire (Future)

Alpine.js

---

# 1. Purpose

This document defines the backend architecture of the TRS+ Corporate Website.

The objective is to create a custom Content Management System (CMS) specifically designed for TRS+.

The CMS should allow non-technical users to manage the entire website without modifying source code.

The backend must remain simple, maintainable and scalable.

---

# 2. Architecture Philosophy

The CMS should be built around content.

Not pages.

Every visible element should be stored as structured data.

Never hardcode editable information.

The frontend must consume dynamic content.

---

# 3. General Principles

The CMS must follow:

SOLID

DRY

KISS

Convention over Configuration

Repository Pattern only when justified.

Avoid unnecessary abstraction.

Laravel conventions have priority.

---

# 4. Folder Structure

app/

Http/

Models/

Services/

Policies/

View/

Mail/

Observers/

resources/

views/

components/

pages/

layouts/

admin/

public/

storage/

database/

migrations/

seeders/

factories/

routes/

web.php

admin.php

api.php

---

# 5. Authentication

Laravel Breeze

or

Laravel Jetstream

Roles

Administrator

Editor

Marketing

Viewer

Future

Client

Each role should have specific permissions.

---

# 6. CMS Modules

Dashboard

Pages

Services

Industries

Technology

Gallery

Hero

Testimonials

Statistics

FAQs

Blog

News

Downloads

Contact

Settings

Users

Roles

Media Library

SEO

Each module should be independent.

---

# 7. Dynamic Content Philosophy

Everything editable.

Examples

Homepage title

Hero subtitle

Buttons

Images

Statistics

Company values

Mission

Vision

Contact information

Footer

Navigation

Social networks

Never require code changes for content updates.

---

# 8. Database Philosophy

Small tables.

Clear relationships.

Meaningful names.

Use UUIDs when appropriate.

Soft Deletes.

Timestamps.

Foreign Keys.

No duplicated information.

---

# 9. Suggested Models

User

Role

Permission

Page

Section

Service

Industry

Statistic

Technology

Setting

Menu

MenuItem

Banner

Gallery

Media

Download

Post

Category

Tag

SEO

ContactMessage

Future

Customer

Project

QuoteRequest

---

# 10. Settings Module

This module controls global website configuration.

Examples

Company Name

Address

Phone

WhatsApp

Email

Google Maps

Google Analytics

Meta Title

Meta Description

Open Graph Image

Logo

Favicons

Business Hours

Everything should be editable.

---

# 11. Media Library

Images

Videos

PDF

Icons

Documents

Features

Search

Folders

Tags

Preview

Optimization

Replace File

Delete

Unused File Detection

Future

WebP Conversion

---

# 12. Hero Module

Editable

Badge

Title

Subtitle

Image

Background

Primary Button

Secondary Button

Trust Cards

Visibility

Animation

---

# 13. Services Module

CRUD

Service Name

Slug

Description

Image

Icon

Benefits

CTA

Display Order

Visibility

SEO

Future

Related Services

---

# 14. Industries Module

CRUD

Industry Name

Description

Icon

Image

Display Order

Visibility

---

# 15. Technology Module

CRUD

Technology

Description

Icon

Image

Status

Order

---

# 16. Statistics Module

Editable Counters

Title

Value

Suffix

Icon

Animation

Visibility

---

# 17. Navigation Module

Editable Menu

Nested Items

Order

Visibility

External Links

Icons

Future

Mega Menu

---

# 18. Contact Module

Editable

Phone

Email

WhatsApp

Address

Google Maps

Business Hours

Social Networks

Future

Multiple Offices

---

# 19. Contact Messages

Store

Name

Company

Phone

Email

Subject

Message

Status

Created At

Admin Notes

Future

Assign to employee

Reply history

---

# 20. SEO Module

Editable

Meta Title

Description

Canonical

OG Title

OG Description

OG Image

Keywords

Robots

Schema

Every page should have SEO configuration.

---

# 21. Dashboard

The dashboard should answer:

How is the website performing?

Widgets

Messages

Visitors

Popular Pages

Downloads

Recent Activity

Future

Google Analytics

Search Console

---

# 22. Blade Components

Every frontend section becomes a Blade component.

Examples

<x-navbar />

<x-hero />

<x-services />

<x-industries />

<x-statistics />

<x-footer />

Never duplicate HTML.

---

# 23. Service Layer

Business logic belongs in Services.

Controllers remain thin.

Example

QuoteService

MediaService

SEOService

StatisticsService

---

# 24. Validation

Use Form Requests.

Never validate directly inside controllers.

---

# 25. Authorization

Use Policies.

Never hardcode permissions.

---

# 26. Caching

Cache

Settings

Navigation

Pages

Statistics

Services

Invalidate automatically after updates.

---

# 27. File Uploads

Store using Laravel Storage.

Never save files directly in public/.

Support future cloud storage.

Amazon S3

Cloudflare R2

DigitalOcean Spaces

---

# 28. Future Integrations

CRM

ERP

WhatsApp Business API

Google Analytics

Meta Pixel

Power BI

Azure AD

Microsoft 365

REST API

GraphQL

---

# 29. API

Future REST API

/api/services

/api/pages

/api/settings

/api/statistics

Prepared for future mobile applications.

---

# 30. Security

CSRF

Rate Limiting

Policies

Password Hashing

Email Verification

Activity Logs

Two Factor Authentication (Future)

---

# 31. Logging

Use Laravel Log.

Errors

Authentication

Admin Actions

Content Changes

Media Uploads

Future

Audit Trail

---

# 32. Notifications

Future

Email

WhatsApp

Slack

Microsoft Teams

Push Notifications

---

# 33. Deployment

Docker Ready

Nginx

PHP-FPM

Redis

Queue Worker

Scheduler

GitHub Actions

Laravel Forge (optional)

---

# 34. Scalability

Future modules should be installable without modifying existing modules.

Open for extension.

Closed for modification.

---

# 35. Definition of Done

Every CMS module should include

Migration

Model

Factory

Seeder

Controller

Policy

Form Request

Blade Views

Routes

Tests

Documentation

---

# 36. Golden Rule

The CMS should empower the client.

The client should never need a developer to change website content.

Developers should focus on building features,

not editing text.
