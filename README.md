# Nexora Labs

Premium digital product engineering agency website built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui.

## Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui (Radix UI)
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Backend:** Next.js Server Actions
- **Database:** Supabase (optional, for contact form)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Production site URL |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL (optional) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key (optional) |

## Supabase Setup (Optional)

Create a `contact_submissions` table:

```sql
create table contact_submissions (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  company text,
  phone text,
  service text not null,
  budget text,
  message text not null,
  created_at timestamptz default now()
);
```

Without Supabase configured, the contact form still validates and shows success (useful for demo).

## Brand Assets

Replace `public/logo.svg` with your official logo. The current logo is a placeholder based on brand colors.

## Deploy

Deploy to [Vercel](https://vercel.com):

```bash
npm run build
```

## Project Structure

```
app/           # Next.js App Router pages & actions
components/    # Reusable UI & layout components
  sections/    # Page sections (Hero, Services, etc.)
  ui/          # shadcn/ui primitives
hooks/         # Custom React hooks
lib/           # Utilities, data, metadata, validations
types/         # TypeScript type definitions
public/        # Static assets
styles/        # Global CSS
```
