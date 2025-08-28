---
title: 'The Only Principle That Matters: It.Depends.Always'
date: '2025-08-28'
---

When people talk about software engineering principles, they often jump straight into tools, processes, or buzzwords like _"agile"_, _"zero tech debt."_ or everyone's favourite - _"vibe-coding"_. But for me, everything starts with the **business context.**

Every bug, every feature request, every architectural decision - all of it traces back to a customer, a product need, or a business goal.

Understanding software engineering begins by recognizing that a product goes through stages. And at each stage, the right engineering decisions are different. There’s no _“one-size-fits-all”_ process, technology or stack.

Here's how I view it:

## Stage 1: Pre-Market Fit (Your Dad, Grandma, and Best Friend Are the Only Users)

At this point, you’re in **market discovery** mode. You don't have a real customer base yet, you're testing the waters, exploring your product’s place in the market and looking for a competitive edge.

Your job? **Experiment fast. Ship fast. Learn fast. Fast.**

At this stage - it is a race track, not a museum. You may rewrite the entire codebase 10 times, and that’s fine - it’s expected. What you need is:

- **Cheap infrastructure** – Think generous free tier, auto-scaling, pay-as-you-go, low overhead. The focus should be on development and shipping actual stuff.
- **Speed-optimized development flow** – Trunk-based development, fast CI/CD pipelines, minimal review process.
- **Focus on shipping, not perfection** – If the naming of the variable is off but it works, ship it. You're trying to learn what your users actually want.
- **Rewrites are okay** – You’re still iterating toward product-market fit. Each rewrite is a step closer to clarity.

At this stage, velocity > quality and the risk of tech debt is low, because nothing is set in stone yet.

## Stage 2: Paying Customers and the Quality Shift

Congratulations - you have people paying for your product. That changes everything. Now, **customer retention** should be your top priority.

You're no longer building fast, you're building trust. Word of mouth is your best marketing tool, and bugs are now business risks.

What changes?

- **Stronger testing practices** – Unit tests, integration tests, E2E tests, linters, formatters … integrated in the CI/CD - they start to become your friends.
- **A more rigorous review process** – “It looks like it works” isn’t a valid reason to approve a pull request anymore.
- **Stability matters** – Rewrites become expensive. You can’t break what customers are already using.
- **Zero tech debt policy** – This is where I take a controversial stance. I believe this is not the stage to keep pushing features on top of a messy codebase. If you do, every new feature takes longer, introduces more bugs, and slowly kills team morale.

You’ll be tempted to keep rushing - especially when customers are asking for new features. But this is a trap. If you don’t invest in foundational improvements now, the compounding cost of shortcuts will haunt every future sprint. Bugs pile up, complexity grows, and each new feature starts taking twice as long to implement.

## Stage 3: Scaling

You’ve got momentum. Customers are growing. So are your costs, infrastructure, and headcount.

At this stage:

- **Start thinking DevOps** — CI/CD pipelines become more complex, you might transition from managed services to self-hosted setups to cut costs or improve reliability.
- **Introduce observability** — logging, monitoring, alerts. You need visibility into what’s happening at scale.
- **Double down on process** — slower releases, stricter testing, more coordination between teams.

Yes, you’re slower than in Stage 1. But now you should be focused on stability and optimization. You don’t want one flaky deployment to affect hundreds or thousands of users.

## The Myth of the “One True Way”

People love to debate the "best practices" of software engineering - some preach zero tech debt from day one, others say ship fast and break things. Some swear by self-hosting, others go all-in on serverless. The truth?

**It depends.**

The “correct” answer changes depending on:

- Your product
- Your customer base
- Your industry
- Your stage of growth
- Your team size and maturity

If someone tells you they’ve found the universal solution to software engineering, what they’ve really found is a **limited perspective**.

For example:

- If you're working with **payments or medical data**, the cost of failure is high.
- If you're building a **movie catalog platform**, you don’t need five layers of tests just to display an image.

What matters is aligning your processes with your business needs, not mimicking what big corporations do. Their problems might not be your problems - yet.
