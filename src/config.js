require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  apiPrefix: '/api',
  apiUrl: `http://${process.env.APIHOST}:${process.env.APIPORT}`,
  apiTokenKey: 'x-access-token',
  tokenExpire: 14, // in days
  app: {
    title: 'TODO',
    description: 'TODO description',
    head: {
      htmlAttributes: {
        lang: 'en'
      },
      title: 'TODO',
      meta: [
        { name: 'description', content: '' },
        { charset: 'utf-8' },
        { property: 'og:site_name', content: 'TODO' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:title', content: 'TODO' },
        { property: 'og:description', content: '' },
        { property: 'og:image', content: '/logo.jpg' },
        { property: 'og:image:width', content: '200' },
        { property: 'og:image:height', content: '200' }
      ]
    },
    notFound: {
      title: 'TODO',
      meta: [
        { name: 'description', content: 'TODO description' },
        { charset: 'utf-8' },
        { property: 'og:site_name', content: 'TODO' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:title', content: 'TODO' },
        { property: 'og:description', content: 'TODO description' },
        { property: 'og:image', content: '/logo.jpg' },
        { property: 'og:image:width', content: '200' },
        { property: 'og:image:height', content: '200' }
      ]
    }
  }
}, environment);
