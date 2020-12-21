module.exports = {
  env: {

  },
  serverRuntimeConfig: {
    ENV: process.env.ENV
  },
  publicRuntimeConfig: {
    API_ENDPOINT: process.env.ENV === 'dev' ? 'http://api.dev.greenherbs.local/wp/graphql' : 'http://api.dev.greenherbs.ru/wp/graphql'
  }
}