# React + TypeScript + Vite

Install dependencies:

```
npm install
```

Run the app:

```
npm run dev
```

Localhost link:

[http://localhost:5173/](http://localhost:5173/)

Workaround for the Github rate limit error:

- As the Github API has a rate limit for unauthenticated users of 60 requests per hour. In order to be able to increase this limit I added an `.env` file to the project (not pushed on the repo), where I added a generated token to this file named `VITE_GITHUB_API_KEY`.
