---
title: CORS
date: June 1st, 2025
descr: Lorem Ipsum
thumbnail: https://www.garymeehan.ie/og/articles/cors.jpg
draft: true
---

# CORS Explained

Have you seen this error when looking into your network tab of your DevTools?

```
...
```

## What is CORS?

CORS stands for Cross-Origin Resource Sharing. CORS manages which websites are allowed to access your APIs. Let's disect it:

- **Cross-Origin** stands for...
- **Resource** stands for ...
- **Sharing** stands for ...

## Why the CORS error is shown

If you send a fetch request to a server and it doesn't contain Access-Control-Allow-Origin header in its response then the browser will let you know and refrain from displaying the response body.

Why I hear you ask?

Imagine someone tries to access your API to delete the entire database. Once a request reaches the server it will check if the Origin header matches the defined CORS adress. If this is not the case it will discard

So if the Access-Control-Allow-Origin header is present it is basically the server saying "Yep, this website is allowed to request data from me. Go ahead.". If the header is missing or it says that it's not allowed that's when you'll get the CORS error.

## How to fix the CORS error

## CSP as the counterpart

The Content-Security-Policy header acts the same way but on the client side.

## Sources

[Video - Master CORS / ByteMonk](https://www.youtube.com/watch?v=E6jgEtj-UjI&t=20s)
