# Phase 2 — Deliver / Client Portal

## Purpose
Once the business has paying customers, create a client-facing portal that demonstrates ongoing value.

The goal is to answer the client's question:

> What am I paying you for?

The answer should be visible inside their dashboard.

## Technology Additions
Continue using:
- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Router
- Supabase
- Cloudflare

Add as needed:
- Recharts for dashboards
- Google Analytics integration
- Google Search Console integration
- Google Business Profile-related data integrations where available
- Stripe for subscriptions/billing

## Client Authentication

Implement Supabase authentication.

Each client must only access their own:
- Dashboard
- Leads
- Reports
- Analytics
- Website information
- SEO information
- Review information

Use Supabase Row Level Security to enforce tenant isolation.

## Client Dashboard

Example:

```text
GOOD MORNING, ABC PLUMBING

Leads             37
↑ 18%

Website Visits    1,842
↑ 23%

Google Calls      21
↑ 11%

New Reviews       14
↑ 6%
```

Include a high-level digital health section:

```text
DIGITAL HEALTH

Website           ✓
Google            ✓
SEO               ↑
Reviews           ✓
Social            ✓
```

## Dashboard Sections

### Overview
Display:
- Leads
- Website visitors
- Calls
- Reviews
- Key conversion metrics
- Recent activity

### Leads
Display:
- New leads
- Lead source
- Lead status
- Date
- Contact information

Potential statuses:
- New
- Contacted
- Qualified
- Appointment
- Won
- Lost

### Analytics
Display relevant metrics from connected analytics systems.

Examples:
- Visitors
- Traffic sources
- Top pages
- Conversions
- Calls
- Form submissions

### SEO
Display:
- Search visibility
- Search impressions
- Clicks
- Top queries
- Top pages
- Local SEO progress

### Reviews
Display:
- Review count
- Average rating
- Recent reviews
- Review trend

### Reports
Provide a simple monthly report view.

Example:
```text
MONTHLY GROWTH REPORT

Leads             37
Website Visits    1,842
Google Calls      21
New Reviews       14

WHAT WE DID
- Updated service pages
- Improved Google profile
- Published local content
- Improved lead form

NEXT MONTH
- Expand local SEO
- Launch new landing page
- Improve review generation
```

## Client Data Model

Expand the database with:
- analytics
- reviews
- seo_metrics
- reports
- appointments
- communications

Maintain a `client_id` relationship on client-specific records.

## Client Experience Requirements
The portal should be:
- Extremely simple
- Mobile responsive
- Non-technical
- Metric-focused
- Visually clean

Avoid exposing unnecessary technical information.

The client should see outcomes, not implementation details.

## Success Criteria
Phase 2 is successful when:
1. Clients can securely log in.
2. Each client only sees their own data.
3. Clients can see measurable activity/results.
4. Monthly reports can be delivered through the portal.
5. The portal reduces the amount of manual reporting required.
6. The portal increases client retention and perceived value.
