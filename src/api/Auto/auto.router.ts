import * as express from 'express'
import { validationResult } from 'express-validator'
import autoService from './auto.service'
import autoValidation from './auto.validation'

const autoRouter = express.Router()

autoRouter.route('/auto')
  .get((req, res, next) =>
    autoService.getAll().then(data => res.json(data)).catch(err => next(err)))
  .post(
    autoValidation.create,
    (req, res, next) => {
      const errors = validationResult(req).array()
      if (errors.length) {
        next(errors)
        return
      }
      autoService.create(req.body).then(data => res.json(data)).catch(err => next(err))
    })

autoRouter.route('/auto/:id')
  .get((req, res, next) =>
    autoService.getOneById(Number(req.params.id)).then(data => res.json(data)).catch(err => next(err))
  )
  .patch(
    autoValidation.update,
    (req, res, next) => {
      const errors = validationResult(req).array()
      if (errors.length) {
        next(errors)
        return
      }
      autoService.update(req.body, req.params.id).then(data =>
        res.json({ affected: data[0] })
      ).catch(err => next(err))
    })
  .delete((req, res, next) =>
    autoService.delete(req.params.id).then(data => res.sendStatus(200)).catch(err => next(err)))

export default autoRouter
