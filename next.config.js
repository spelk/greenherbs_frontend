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
        : "https://apidev.greenherbs.ru/wp/graphql",
  },
};
