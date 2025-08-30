---
title: 'Building Digital Finance - Week 2'
date: '2025-08-15'
---

## Auth Setup in 2 Minutes

For the **BETA** version, I went with the fastest approach possible -> a 2-minute auth setup just to get building the actual stuff.  
Long-term, the plan is **self-hosted auth + custom forms**, so I’m not tied to a single provider. Until then ... you will be greeded by by this annoying **Clerk** popup on the right side on the screen:

:::carousel
/digital-finance/3.png
:::

## GPT-5 as My Coding Copilot

In just couple of hours, I had the basic website layout done — nav, search bars, the works - thanks to **GPT-5**.  
This was also a great chance to try the model out, and honestly, it’s a big leap over GPT-4 in _every_ aspect, especially coding.

That said, it’s not perfect. It still:

- Needs a couple of iterations to steer in the right direction.
- Likes to “make stuff up” you didn’t ask for.
- Sometimes overcomplicates simple requests.

But once you correct it - you don’t have to keep going in circles.

Think of it like _a car with early autopilot before autopilot was really a thing_:  
It keeps the gas pedal pressed, maintains distance decently well, but you still have to brake or steer every now and then. Still way better than pressing the gas yourself all the time.

## Mobile Device Handling

I’ve added a **dedicated screen** for anyone visiting from a mobile or smaller screen, since the site is optimized for desktop.

:::carousel
/digital-finance/4.png
:::

Eventually, there will be a **dedicated mobile app**, but for now, smaller screens get redirected to a `/mobile` route using **Next.js middleware + client-side handling**.

```ts
// middleware.ts

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
    '/',
  ],
};

const isProtectedRoute = createRouteMatcher(['/']);

function isMobileOrTablet(userAgent: string | null): boolean {
  if (!userAgent) return false;

  const ua = userAgent.toLowerCase();

  return /mobi|android|iphone|ipad|ipod|phone|tablet/.test(ua);
}

export default clerkMiddleware(async (auth, request) => {
  const { nextUrl, headers } = request;
  const pathname = nextUrl.pathname;

  if (isProtectedRoute(request)) {
    await auth.protect();
  }

  if (pathname !== '/mobile') {
    const userAgent = headers.get('user-agent');
    const chUaMobile = headers.get('sec-ch-ua-mobile');
    const hintedMobile = chUaMobile?.toLowerCase() === '?1';

    if (hintedMobile || isMobileOrTablet(userAgent)) {
      const url = new URL('/mobile', nextUrl);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
});
```

How it works:
I use cookies + other detection methods to remember if a mobile user chooses to proceed anyway (valid for 1 day).
Later, this will be replaced with App Store links.

### Dashboard & Data Approach

The dashboard is currently working with hardcoded data. I always start frontend-first with dummy data to:

- Nail the exact data structure early.
- Speed up backend development.
- Avoid guesswork and constant refactoring.

:::carousel autoplay
/digital-finance/5.png
/digital-finance/6.png
/digital-finance/7.png
:::

### Next Steps

In the next update, I’ll be:
Implementing portfolio creation (manual input of assets).
Visualizing that data.
Starting with hardcoded data -> then hooking it to the backend for the MVP.

Until then - you can play around with what’s live so far.

See you in the next update.

### Related Blog Posts

- [From Frustration to Product](/blog/from-frustration-to-product)

You can explore the source code and the full repository on the [main project page](/projects/Digital%20Finance).
