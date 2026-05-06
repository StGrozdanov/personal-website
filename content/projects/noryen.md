---
product: Noryen
started_at: 2026-04-01
ended_at: 2026-04-21
tech_stack: ['Golang', 'NextJS', 'TypeScript', 'PostgreSQL', 'Supabase']
logo: /noryen/logo.png
image: /noryen/1.png
summary: Monitor your AI in production.
url: https://noryen.com/
repository: [https://github.com/StGrozdanov/noryen-sdk]
---

When I was building [Biometryx](/projects/Biometryx), I ran into a problem I didn’t expect.

In a health related context AI can become dangerous fast.

The model can:

- suggest medication
- mention dosages
- give advice that looks correct but isn’t

I wouldn’t know unless I manually tested every edge case. And even then - I wouldn't catch falty output before my users.

It was not scalable.
And definitely not safe.

## How is my AI actually behaving in production?

Most of the time we focus on prompts, UX, speed ... But we rarely ask **the question** - how does my AI behave in real-world scenario?

Are we going to be digging through raw JSON logs? Debugging by copy-pasting prompts into ChatGPT? Or .. do we simply cross fingers and hope for the best ?

I looked into existing solutions.

They were:

- heavy
- expensive
- built for large teams

I just needed something simple:

- log outputs
- flag risky ones
- compare models

So I built it.

:::carousel autoplay
/noryen/2.png
/noryen/3.png
/noryen/4.png
:::

AI isn’t deterministic.
You can’t fully predict what it will say.
And if you’re building in sensitive areas, “probably safe” is not good enough.

You can try [Noryen here](https://www.noryen.com/)
