---
title: "From Frustration to Product"
date: "2025-08-05"
summary: "I’ve built projects before. I’ve also wasted months before - building tools no one needed, solving problems no one had. 
This time, I’m doing it differently."
---

**Digital Finance** is a product born from frustration - investment trackers with buggy UIs, endless downtime and tools that either overwhelm or underdeliver.

I needed something powerful and simple. I couldn’t find it.

So I’m building it - for myself first, and maybe for others too.

In this post, I’ll walk you through how I’m thinking about it: the purpose, the stack, the MVP, the lessons from failure, and how I’m using AI and modern workflows to do things 10x faster than ever before.

## I’ve Done It Wrong Before

In the past, I’ve built projects for the wrong reasons.  
I’d try to guess what people wanted, lock myself in, work for months in the dark, based on my own assumptions, and ship something only to realize no one needed it, no one asked for it and no one cared.

**Not this time.**

This time, I’m solving my own problem.  
And I’m building everything in public, step by step - not because I expect it to blow up, but because it’s the only way that makes sense anymore in this "modern" age we are transitioning into.

## What Should It Do — and Why I’m Even Building It

Let’s start from the beginning.

**Digital Finance** is a platform designed to improve how individuals track, analyze, and grow their investments.

It was born from frustration with every tool I’ve tried: too basic, too buggy, or too bloated.  

Some had outrageous downtime. 

Others felt like Windows 98 in 2025.

So:

- I had a problem.
- I looked for a solution.
- Didn’t find one.
- I decided to build my own.

At worst? I solve my own problem.  
At best? Others have the same problem, and now there’s a solution.  

**Win-win.**

I’ve built “clever” features no one cared about before. Now I’m doing the opposite:  
Build only what I need. Let others follow along if they want.

## Step One: MVP

It’s easy to fall in love with the vision and overbuild.  
But I’ve learned the hard way - **measure three times, cut once.**

**What I could build:**

- Cross-platform mobile & web app
- Real-time syncing with exchanges, wallets, brokers
- AI-powered insights
- Alerts, daily recaps, portfolio sharing, social components

**What I’m actually building first:**  

A basic web app where you can manually enter your portfolio holdings, and get a total worth chart.  
That’s it. Simple. Dumb. Fast to ship.

From there, we iterate: maybe add asset categories, CSV import, ability to edit/delete transactions.  

But it starts with one core loop: **input ➜ output.**

## Mobile vs Web — and Why I’m Doing Web First

Both are essential long term.  
But not for the MVP.

**Why both?** Because in the investing communities I’m in, people constantly share clunky portfolio screenshots. You can’t track real-time performance, and you miss price corrections and developments - you're left in the dark.

What if you could just click a link and see someone’s portfolio - live?  
That’s the web app: **shareable, real-time views.**

**Notifications**? That’s the mobile part.  
You want alerts in your pocket - price movement, portfolio drops, performance summaries.

So yes - both matter. 

But I’m not dumb enough to build both at once as a solo dev with limited time.

## How I’m Building It — The Stack That Makes Sense

**Frontend**

- Next.js
- Tailwind CSS
- TypeScript

**Backend**

- Golang
- GraphQL
- PostgreSQL
- Redis Cloud

**Auth & Infra**

- Clerk
- Supabase
- Vercel
- Fly.io
- GitHub

**Mobile**

- React Native + TypeScript

You could argue to start smaller, even with vanilla JS.  
But this app needs to be dynamic, cache-friendly, fast - across web and mobile.  
React is the obvious choice. And with it, **Next.js** - for routing, SSR, image optimization, caching, and upcoming ISR.

Why a full framework? Because we’re dealing with:

- WebSockets
- Dynamic data
- Real-time UI updates
- Charts and dashboards

Next.js allows full-stack integration. API routes, server components, DB calls - all handled seamlessly in a single place. Normally I’d go that route. I won’t need separate API at all.

But with a mobile app in play, the web and mobile frontends are separate. That means the backend has to be centralized, performant, scalable.  
**Golang** is the perfect choice here - especially with WebSockets.  
It’s fast, efficient, scalable, and lightweight.

Different apps might need slightly different data. Instead of building a dozen REST endpoints, **GraphQL** lets me expose one flexible API and let clients query what they need. It also allows me to fetch multiple resources in a single network request, perfect scenario for a dashboard. 

Sure, it adds complexity. I’d usually start simple, with REST, and evolve into GraphQL later if needed at all.  
But this time? I’m doing it from the start.

And with React on web, **React Native** makes sense for cross-platform mobile. Same design system. Same ecosystem. Less rework.

This stack lets me move fast with zero infra cost.  
I’ve done it before. I know it works.  
It also saves me from needing to fight servers - instead of writing code and actually shipping stuff.

## Infra & Workflow — Why It’s Not Just “Later Stuff”

Most solo devs ignore this. I don’t.

From day one:

- GitHub repo and CI/CD
- Auto-deploy to Vercel and Fly.io
- Small, well-defined tasks

I’m also making this open-source from the start.  
Not because I expect contributors - but because:

- It keeps me honest
- Others can open issues, give suggestions
- I believe in building with transparency

We’re entering an era where authenticity > secrecy.  
The “secret sauce” is a myth. We now have infinite access to knowledge. 

What used to be hidden is now open - welcome to the AI age, where we are transitioning into an era of authenticity, communities, decentralization and openness.

## The AI Factor — 10x If You Know How To Use It

AI isn’t a magic wand. It’s a power tool.  
In skilled hands? 10x productivity.  
In clueless hands? A mess.

I use AI to:

- Speed up boilerplate
- Validate ideas
- Clean logic
- Explore alternatives
- Generate UI concepts

**My go-to tools:**

- Cursor – inline code chat + autocompletion
- v0.dev & Stitch – for prompt-based UI prototyping

This is what **Stitch** suggested as initial design:

:::carousel
/blog/digital-finance-design.png
:::

If you don’t understand the code, AI won’t save you.  
But if you do? It’s like coding with a team of assistants.

AI agents might change the game in the near future. Vibe coding might solve it for most people sooner rather than later. 

But right now?  

AI in the right hands is just a productivity hack.

## Additions - This Is Still an Experiment

You may have noticed I mentioned "building fast" and speed more than once in this post.
But let me clarify:
This isn’t “move fast and break things” in the Silicon Valley sense.
It’s build fast within the limits of my actual life.

I don’t have 40 hours a week to pour into this.
I’m building this in the margins - nights, weekends, moments between other responsibilities.

A lot of people start projects with rigid productivity frameworks:
actionable steps, deadlines, milestones, KPIs, metrics.
Been there. Done that. It works - until it doesn’t.

Over time, I’ve shifted to a more flexible approach:

> Inspired by the "Tiny Experiments" book, I’m treating this project as an experiment. 
> The goal? 
> Work on it at least 2 hours per week, consistently. See where that leads.

## Final Thoughts

I’ve built half a dozen side projects.  
Some made it. Most didn’t.

The ones that failed?  
I built in the dark. I guessed. I waited too long to share.  
I shipped when it was “done,” but by then, no one cared.

This time:

- I’m solving my own problem
- I’m building in public
- I’m shipping early, shipping ugly
- I’m iterating with feedback
- I’m inviting others to follow, fork, or contribute

I don’t care if Digital Finance becomes a startup, gets copied, or just helps me personally.  

If I ship it, use it and learn something - **I’ve won.**

If you’re tired of building in the dark, of guessing what people want, of “almost done” projects - try doing it differently.

**Build small. Build fast. Ship. Iterate. Repeat.**  

I’ll be documenting every step right here on the blog.


---

You can explore the source code and the full repository on the [main project page](/projects/Digital%20Finance).