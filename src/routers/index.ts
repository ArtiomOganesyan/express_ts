import * as express from 'express'
import houseHoldRouter from '../api/HouseHold/houseHold.router'
import personRouter from '../api/Person/person.router'
import autoRouter from '../api/Auto/auto.router'
import limiter from '../middlewares/rateLimit'

const routers = [autoRouter, houseHoldRouter, personRouter]

export const setRouters = (app:express.Express):express.Express => {
  const prefix = '/api'

  app.use(prefix, limiter, ...routers)

  return app
}
