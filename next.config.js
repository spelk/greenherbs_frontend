module.exports = {
  env: {

  },
  serverRuntimeConfig: {
    ENV: process.env.ENV
  },
  publicRuntimeConfig: {
    API_ENDPOINT: process.env.ENV === 'dev' ? 'https://dev.greenherbs.local/' : 'https://dev.greenherbs.ru/'
  }
}