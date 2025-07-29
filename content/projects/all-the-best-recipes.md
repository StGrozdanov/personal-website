---
product: All The Best Recipes
started_at: 2021-12-12
ended_at: 2024-04-08
tech_stack:
  [
    'Golang',
    'React',
    'React Native',
    'Expo',
    'SASS',
    'TypeScript',
    'PostgreSQL',
    'Websocket',
    'Tailwind CSS',
    'MySQL',
    'NodeJS',
  ]
logo: /all-the-best-recipes.png
image: /recipes-img.png
summary: Digital cookbook for family use
url: https://all-the-best-recipes.vercel.app/
repository:
  [
    https://github.com/StGrozdanov/recipes-v2-client,
    https://github.com/StGrozdanov/recipes-v2-server,
    https://github.com/StGrozdanov/recipes-v2-cms-mobile,
  ]
---

# All the Best Recipes

Digital cookbook for recording the most delicious recipes and their ingredients, originally intended for me and my family. Everyone can register and engage by commenting on different recipes, sharing their experience, or creating their own recipe.

## History

This project has always been my personal playground for learning and experimenting with new technologies. The main goal was to keep it at zero cost, iterating and rebuilding it every time I learned something new, while also serving as a genuinely useful family cookbook.

**December 12, 2021**: The project began as a backend-as-a-service solution using `back4app` + `MongoDB`. At the time, I had just finished my javascript course at [SoftUni](https://softuni.bg/) and wanted to practice my new skills. Not knowing how to build a backend myself, I chose a simple, cheap, and fast solution. The frontend was hosted on `firebase`. The main client was built in vanilla JS, intentionally avoiding frameworks to deeply learn JS fundamentals instead of relying on abstractions.

**April 10, 2022**: After completing **MySQL**, **Spring Data**, and **HTML & CSS** courses, I improved the app by splitting the CSS into maintainable files, making the design responsive (320px to 4K), and redesigning the website.

:::carousel autoplay
/recipes-project/7.png
/recipes-project/8.png
/recipes-project/9.png
/recipes-project/10.png
/recipes-project/11.png
/recipes-project/1.png
/recipes-project/2.png
/recipes-project/3.png
/recipes-project/4.png
/recipes-project/5.png
:::

**May 16, 2022**: During the SoftUni Spring MVC course, I learned to build my own server. The app evolved into multiple clients and servers: a vanilla JS web client, a React Native mobile admin panel (to support both Android and iOS), a Node.js notification server (websockets, socket.io), and a Java REST API server.

**Pre-React Migration 2022-2023**: The project won the Best SoftUni Project award for the year, chosen from all student submissions—a proud milestone achieved before the ReactJS migration.

:::carousel autoplay isVertical
/recipes-project/mobile/1.png
/recipes-project/mobile/2.png
/recipes-project/mobile/3.png
/recipes-project/mobile/4.png
/recipes-project/mobile/5.png
/recipes-project/mobile/6.png
/recipes-project/mobile/7.png
/recipes-project/mobile/8.png
/recipes-project/mobile/9.png
/recipes-project/mobile/10.png
:::

**December 22, 2023**: Having achieved my goal of mastering JavaScript fundamentals, I rebuilt the main client in **ReactJS**. This migration brought a complete redesign and modernization of the website, leveraging my new skills and making the codebase more maintainable and scalable.

**December 23, 2023**: The backend faced another major change. Heroku's free tier was decommissioned, and my new hosting provider reduced the free RAM allowance from 512MB to 220MB. Rather than pay extra, I decided to rebuild the backend in **Golang** - a language I had learned while working for [Mansion](/work/Mansion%20Casinos) - because of its efficiency and low resource usage. The new Go backend, which also unified the old Node.js notification server, now runs comfortably at 60-80MB RAM, including all features.

Throughout its life, the project has gone through many iterations: from backendless, to Java + Node, to Golang ... from vanilla JS to ReactJS, and even a React Native mobile client. Every time I learned something new, I implemented it here. The site remains a go-to resource for my family whenever we cook something special.

**Reflection:** If I were to rebuild it today, I’d use **Next.js** - the perfect candidate for a static website, caching everything behind a CDN for instant loads. I would also use **Tailwind CSS** instead of Sass for utility-first styling and smaller CSS bundle. I would also not roll my own authentication solution - instead, I’d rely on something like **Clerk** for auth. Even so, the current React + Golang setup is highly performant: React Query fetches data with a JSON fallback, so users see content instantly while the Go server (which responds in ~100ms) processes requests. With Next.js, I could further reduce backend requests, but I’m proud of the performance and flexibility achieved so far.

## Legacy Stack

The original versions of the project were built with the following technologies:

### Client

- **Vanilla JS** (with lit-html for templating)
- **Page.js** (client-side routing)
- **Webpack** (bundling)
- **Email JS** (email sending)
- **Firebase** (hosting)

### Mobile Admin Panel

- **React Native**
- **Expo**
- **React Navigation**
- **Native Notify** (push notifications)
- **React Native Async Storage**
- **React Native Chart Kit**

### API

- **Spring Boot**
- **Spring Security**
- **Auth0 JWT Token**
- **Model Mapper**
- **AWS s3**
- **Gradle**
- **MySQL**

### Notifications Server

- **Node.js**
- **Socket.io**

---

## Current Stack

Built with the following:

### Client

- **React JS**
- **Typescript**
- **SASS**
- **CI/CD pipeline** (typechecking, custom linters, unit tests, integration tests, e2e tests, deployment environments)

### Mobile Admin Panel

- **React Native**
- **Expo**
- **Typescript**
- **React Navigation**
- **Native Notify** (push notifications)
- **React Native Async Storage** (theme support, etc ..)
- **React Native Chart Kit**

### API

- **Gin** (Golang)
- **AWS SDK**
- **Bcrypt**
- **JWT**
- **PostgreSQL** (with JSONB and standard columns)
- **Prometheus**
- **Websocket** (Gorilla)
- **CI/CD pipeline** (custom linters, unit tests, integration tests, single deployment environment)
