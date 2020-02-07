
const express = require('express')
const next = require('next')
const nextI18NextMiddleware = require('next-i18next/middleware')

const nextI18next = require('./i18n')

const port = process.env.PORT || 3000
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler();

async function f() {
  await app.prepare()
  const server = express()

  server.use(nextI18NextMiddleware(nextI18next))

  server.get('*', (req, res) => handle(req, res))

  server.listen(port)
}

f().then(console.log("read"))