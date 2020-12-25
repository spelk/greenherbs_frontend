module.exports = {
  env: {

  },
  serverRuntimeConfig: {
    ENV: process.env.ENV
  },
  publicRuntimeConfig: {
    API_ENDPOINT: process.env.ENV === 'dev' ? 'https://api.dev.greenherbs.ru/wp/graphql' : 'https://api.dev.greenherbs.ru/wp/graphql'
  }
}