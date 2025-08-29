---
title: 'Building Digital Finance - Week 3'
date: '2025-08-29'
---

I moved the portfolio out of the homepage and rebuilt it as an **analytics-first dashboard**. Mock data is in place so the UX feels real while I wire up the backend.

This update also lays out what’s next on my radar:

- **Individual Asset Details** pages
- **Followed Assets** page
- **Markets** page
- **mobile-only Insights** page with deeper metrics

After those, I’ll shift focus to backend integration with real data.

If you missed the earlier context, start here:

- [From Frustration to Product](/blog/from-frustration-to-product) — background thinking and product goals
- [Building Digital Finance — Week 2](/blog/building-digital-finance---week-2) — where portfolio features began

## The Big Change

:::carousel autoplay
/homepage-1.png
/homepage-2.png
:::

Core portfolio functionality has been moved from the mixed-content homepage into a **dedicated Portfolio section** in the navigation.

Portfolio management deserves focus. When it lived on the homepage, it competed with market insights and messaging. Splitting them gives both areas room to breathe and makes the product easier to use.

The **homepage is now an analytics & metrics dashboard** - answering two questions instantly:

👉 _How is my money doing?_  
👉 _What should I look at next?_

### What this means for users

- **Clearer navigation** — manage holdings in Portfolio, scan insights on Home
- **Better mental model** — actions vs analytics are separated

The new homepage ships with several key widgets:

### Portfolio Overview

- Total portfolio value + 1-day change (absolute + %)
- Visual indicators (green for gains, red for losses)
- Click-through to detailed portfolio view

### Key Performance Metrics

- Total invested (sum of buys)
- Monthly return
- Annualized return (projection)
- Unrealized gain/loss

### Portfolio Performers

- Best and worst performer highlighted for quick risk/reward checks
- Side-by-side comparison for instant context

### Market Insights

- Price highlights over multiple timeframes
- Daily movers from your portfolio
- Trend mini-charts to spot momentum and shifts

## Mock Data

I added a **full mock-data layer** so the UI feels useful before the backend exists. The goal: let people try the product, feel the flows, and give feedback - without needing real accounts or live feeds.

### What the mock covers

- **Asset classes**: Crypto (BTC, ETH, SOL + others), Stocks (AAPL, NVDA, TSLA, MSFT), Indices/ETFs, Commodities (Gold, Oil), Funds, NFTs, and cash (USD, EUR)
- **Per asset**: current price, 24h change, historical series, and transaction history
- **Demo portfolio**: 8 realistic transactions with fees, timestamps, purchase prices — everything needed for P&L and return calculations
- **Timeframes**: 1H, 1D, 1W, 1M, YTD, 1Y, ALL — with responsive chart updates

This makes the product feel “real” while actual data sources are swapped in later.

You can now choose between demo asset data that is pre-built for you in order to experience the platform - or to manually create your own assets.

:::carousel autoplay
/portfolio-page-1.png
/portfolio-page-2.png
/portfolio-page-3.png
/portfolio-page-4.png
:::

## What’s Next

### 1. Followed Assets page

A lightweight, fast-loading watchlist for tracking assets without adding them to a portfolio.

**Core features**:

- Simple follow/unfollow
- Grouping (folders/tags), quick filters (crypto, stocks, ETFs)
- Compact snapshot: price, 24h change, 1W sparkline
- Quick actions: add to portfolio, set alerts, share asset link

---

### 2. Individual Asset Details page

Deep, focused pages per asset combining price history, fundamentals, and context.

**Core features**:

- Full charting (1H → ALL) + overlays (comparisons, moving averages)
- Key metrics: market cap, circulating supply, P/E (stocks), yield, timeframe changes
- Transaction history & personal exposure
- Related assets, news, on-chain indicators (for crypto)
- Quick actions: add to portfolio, set alerts, share snapshot

---

### 3. Markets page

A broader market view for macro context and discovery.

**Core features**:

- Global indices and sector performance
- Simple screener (market cap, volume, sector, performance)

## After That: Backend Focus

Once those three are in solid MVP state, I’ll focus on backend integration:

- Market data APIs (prices, order books, depth where relevant)
- Secure user authentication & persistent portfolios
- Server-side analytics for heavy calculations
- Real-time updates via websockets

This sequencing allows UX loops to mature before wiring persistence and live feeds — reducing blast radius and clarifying API priorities.

## Try It & Tell Me

If you’re using the prototype, toggle the demo portfolio, poke around the new homepage, and let me know:

- What metric do you want front-and-center?
- Which timeframes do you actually use?
- Any missing asset types that matter to you?
