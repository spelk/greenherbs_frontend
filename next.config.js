module.exports = {
  env: {

  },
  serverRuntimeConfig: {
    ENV: process.env.ENV
  },
  publicRuntimeConfig: {
    API_ENDPOINT: process.env.ENV === 'dev' ? 'http://api.dev.greenherbs.local/wp/graphql' : 'https://dev.greenherbs.ru/'
  }
}