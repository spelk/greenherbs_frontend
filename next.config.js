module.exports = {
  target: "serverless",
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
        : "https://apidev.greenherbs.ru/wp/graphql",
  },
  async headers() {
    return [
      {
        source: '/noSsr',
        headers: [
          {
            key: 'x-testestestset',
            value: 'hellohellohellohellohello',
          },
          {
            key: 'Server-Timing',
            value: 'db;dur=123;desc="Database", tmpl;dur=56;desc="Template processing"',
          },
        ],
      },
    ]
  },
};
