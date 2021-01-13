module.exports = {
  env: {},
  serverRuntimeConfig: {
    ENV: process.env.ENV,
  },
  publicRuntimeConfig: {
    API_ENDPOINT:
      process.env.ENV === "dev"
        ? "http://api.greenherbs.local/wp/graphql"
        : process.env.ENV === "staging"
        ? "https://apidev.greenherbs.ru"
        : "https://greenherbs.ru",
  },
};
