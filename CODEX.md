# CODEX.md — Kikuba

You are helping implement Kikuba's marketing site.

## Before coding
Read these files first:

- `AGENTS.md`
- `CODEX.md`
- `marketing/00-brand-context.md`
- `marketing/01-icp.md`
- `marketing/02-offers.md`
- `marketing/07-analytics-plan.md`
- `marketing/10-landing-structure.md`

## Priorities
1. Make the landing clear.
2. Make CTAs obvious.
3. Optimize mobile.
4. Keep the code simple.
5. Add analytics events where possible.
6. Avoid overengineering.
7. Preserve Kikuba's tone.
8. Do not add unnecessary dependencies.

## Main CTA
Solicita un diagnóstico gratuito

## Recommended landing sections
1. Hero
2. Problem
3. Solution
4. Services by result
5. Use cases
6. Process
7. Diagnosis
8. FAQ
9. Final CTA

## Diagnosis page
Create or maintain a `/diagnostico` page with: short explanation, what Kikuba reviews, who it is for, form fields, clear CTA, simple privacy message and what happens after submission.

## Form fields
- Nombre
- Nombre del negocio
- Ciudad
- Giro del negocio
- Cómo recibe clientes hoy
- Dónde siente más desorden
- Qué usa para organizarse
- Qué quiere mejorar primero
- Preferencia de contacto
- Contacto
- Link a sitio/redes, optional

## Analytics events
Use these events when possible:

- `click_whatsapp`
- `click_diagnostico`
- `submit_diagnostico`
- `click_email`
- `click_cta_primary`
- `click_cta_secondary`
- `scroll_75`
- `view_services`
- `view_faq`
- `view_diagnostico`

If analytics is not configured, leave a simple documented structure for GA4 or GTM.

## Do not
- Do not make the copy sound like a generic agency.
- Do not use buzzwords like disruptive, revolutionary, world-class or AI-powered unless explicitly justified.
- Do not add animations that hurt clarity.
- Do not add dependencies without a clear reason.
- Do not create a complex backend unless requested.
- Do not make fake testimonials.
- Do not invent case studies.
