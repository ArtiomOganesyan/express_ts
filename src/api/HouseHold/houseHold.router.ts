import * as express from 'express'
import { validationResult } from 'express-validator'
import houseHoldService from './houseHold.service'
import houseHoldValidation from './houseHold.validation'

const houseHoldRouter = express.Router()

houseHoldRouter.route('/household')
  .get((req, res, next) =>
    houseHoldService.getAll().then(data => res.json(data)).catch(err => next(err)))
  .post(
    houseHoldValidation.create,
    (req, res, next) => {
      const errors = validationResult(req).array()
      if (errors.length) {
        next(errors)
      }
      houseHoldService.create(req.body).then(data => res.json(data)).catch(err => next(err))
    })

houseHoldRouter.route('/household/:id')
  .get((req, res, next) =>
    houseHoldService.getOneById(Number(req.params.id)).then(data => res.json(data)).catch(err => next(err))
  )
  .patch(
    houseHoldValidation.update,
    (req, res, next) => {
      const errors = validationResult(req).array()
      if (errors.length) {
        next(errors)
      }
      houseHoldService.update(req.body, req.params.id).then(data => res.sendStatus(200)).catch(err => next(err))
    })
  .delete((req, res, next) =>
    houseHoldService.delete(req.params.id).then(data => res.sendStatus(200)).catch(err => next(err)))

houseHoldRouter.route('/household/owners')
  .post(
    houseHoldValidation.createWithOwner,
    (req, res, next) => {
      const errors = validationResult(req).array()
      if (errors.length) {
        next(errors)
      }
      houseHoldService.createWithOwners(req.body).then(data => res.json(data)).catch(err => next(err))
    }
  )

export default houseHoldRouter
