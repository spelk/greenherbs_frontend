module.exports = {
  env: {

  },
  serverRuntimeConfig: {
    ENV: process.env.ENV
  },
  publicRuntimeConfig: {
    API_ENDPOINT: process.env.ENV === 'dev' ? 'http://api.dev.greenherbs.local/wp/graphql' : 'https://api.dev.greenherbs.ru/wp/graphql'
  },
  assetPrefix: process.env.ENV === 'dev' ? '' : 'https://cdn.alxbuts.dev/GreenHerbs/',
}