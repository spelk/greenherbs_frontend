module.exports = {
  env: {},
  serverRuntimeConfig: {
    ENV: process.env.ENV,
  },
  publicRuntimeConfig: {
    API_ENDPOINT:
      process.env.ENV === "dev"
        ? "https://apidev.greenherbs.ru/wp/graphql"
        : process.env.ENV === "staging"
        ? "https://apidev.greenherbs.ru/wp/graphql"
        : "https://api.greenherbs.ru/wp/graphql",
  },
  async headers() {
    return [
      {
        source: '/about',
        headers: [
          {
            key: 'Server-Timing',
            value: 'db;dur=123;desc="Database", tmpl;dur=56;desc="Template processing"',
          },
        ],
      },
    ]
  },
};
