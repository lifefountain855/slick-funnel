# Phase 1 — Sell / V1 Website

## Purpose
Build the first production version of the website with one primary objective:

> Turn a local small-business owner into a qualified sales lead.

The website should position the company as an affordable digital growth partner, not simply a web-design agency.

## Core Positioning
Primary message:
> We handle your online presence so you can run your business.

The service should communicate that the company helps businesses:
- Get found online
- Generate leads
- Convert leads
- Build trust through reviews
- Measure growth

Avoid positioning the company primarily as:
- A web designer
- An SEO agency
- A social media agency
- A generic digital marketing agency

## Technology
- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Router
- Supabase
- Cloudflare Pages
- React Hook Form
- Zod
- Lucide React

<!-- Optional/near-term:
- Resend for transactional email
- Google Analytics
- Google Search Console
- Stripe -->

## Public Pages

### 1. Home
Hero section:
- Clear customer-focused headline
- Short explanation of the value proposition
- Primary CTA: "Get Your Free Online Growth Audit"
- Secondary CTA: "See How It Works"

Recommended content sections:
- Problem / pain points
- How the system works
- Services
- Industries served
- Pricing
- Proof / testimonials or case studies when available
- Final CTA

### 2. Services
Organize services around customer outcomes rather than technical services.

#### Get Found
- Website
- Google Business Profile
- Local SEO
- Search visibility

#### Get Leads
- Contact/quote forms
- Landing pages
- Booking
- Lead capture

#### Convert Leads
- Automated follow-up
- Email/SMS
- CRM
- Appointment scheduling

#### Build Trust
- Review generation
- Reputation management
- Social content

#### Measure Growth
- Analytics
- Lead tracking
- Monthly reporting

### 3. Pricing
Initial productized packages can be presented as:

#### Foundation
Approx. $750 setup + $99/month
- Professional website
- Google Business optimization
- Analytics
- Basic SEO
- Hosting
- Updates

#### Growth
Approx. $750 setup + $399/month
- Everything in Foundation
- Local SEO
- Review system
- Content
- Lead tracking
- Monthly reporting

#### Lead Machine
Approx. $1,000 setup + $699+/month
- Everything in Growth
- Lead automation
- SMS/email follow-up
- Booking
- Landing pages
- Ads
- Conversion tracking

Pricing is a starting point and should remain easy to change.

### 4. Industries
Initially focus on one or two verticals rather than claiming to serve every business.

Potential verticals:
- Home services
- Contractors
- HVAC
- Plumbing
- Electrical
- Roofing
- Landscaping
- Pool services
- Cleaning
- Pressure washing
- Beauty/personal services
- Professional services

### 5. About
Explain:
- Who the company is
- Why the company exists
- The problem being solved
- The practical, affordable approach

### 6. Contact
Include:
- Name
- Business
- Email
- Phone
- Website
- Industry
- Message
- Preferred contact method

## Free Digital Growth Audit

This should be a major V1 feature and primary lead-generation mechanism.

### Input
Collect:
- Business name
- Contact name
- Website
- Industry
- City/service area
- Email
- Phone

### Initial audit categories
- Website
- Google presence
- SEO
- Reviews
- Social presence

### Example result
```text
YOUR DIGITAL PRESENCE

67 / 100

Website       82
Google        64
SEO           51
Reviews       72
Social        43
```

The audit should identify opportunities and end with a clear CTA:
- Book a consultation
- Request a proposal
- Talk to a growth specialist

The audit does not need full automation in the first release. It can initially create an internal lead/audit record for manual review.

## Lead Management

Every lead should be stored in Supabase.

Suggested `leads` fields:
- id
- business_name
- contact_name
- email
- phone
- website
- industry
- city
- source
- status
- notes
- created_at

Suggested statuses:
- New
- Contacted
- Meeting
- Proposal
- Won
- Lost

## Internal Admin Dashboard

Build a simple authenticated dashboard for the business owner/operator.

Required:
- Lead list
- Lead detail
- Lead status
- Notes
- Audit access
- Contact information
- Source
- Creation date

Example:
```text
NEW LEADS

ABC Plumbing
Plumbing
Pembroke Pines
abcplumbing.com

[Audit] [Contact] [Convert]
```

## Database — Initial Scope

Start small.

Tables:
- users
- clients
- leads
- services
- subscriptions
- projects
- audit_reports
- audit_items

Do not build the entire eventual CRM or SaaS platform during Phase 1.

## Authentication
Authentication is initially for internal/admin use.

Prepare the architecture for future client accounts, but do not require a complete client portal in V1.

## Success Criteria
Phase 1 is successful when:
1. A local business owner understands the offer within seconds.
2. The site generates qualified audit/contact submissions.
3. Leads are stored reliably.
4. The owner can manage leads internally.
5. The site can support the first 1–3 paying customers.
6. The architecture can evolve into a client portal without a complete rewrite.

## Do Not Build Yet
Avoid:
- Native mobile app
- Microservices
- Kubernetes
- Redis
- GraphQL
- Custom CRM
- Complex AI agent systems
- Large automation platform
- Extensive client analytics portal
