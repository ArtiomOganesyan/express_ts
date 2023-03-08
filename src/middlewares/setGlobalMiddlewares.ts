import * as express from 'express'
import * as morgan from 'morgan'

export const setGlobalMiddlewares = (app:express.Express):express.Express => {
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(morgan('dev'))
  return app
}
