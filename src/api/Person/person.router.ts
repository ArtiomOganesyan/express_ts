import * as express from 'express'
import personService from './person.service'
import personValidation from './person.validation'

const personRouter = express.Router()

personRouter.route('/person')
  .get((req, res, next) =>
    personService.getAll().then(data => res.json(data)).catch(err => next(err)))
  .post(personValidation.create,
    (req, res, next) =>
      personService.create(req.body).then(data => res.json(data)).catch(err => next(err)))

personRouter.route('/person/:id')
  .get((req, res, next) =>
    personService.getOneById(Number(req.params.id)).then(data => res.json(data)).catch(err => next(err))
  )
  .patch(
    personValidation.update,
    (req, res, next) =>
      personService.update(req.body, req.params.id).then(data => res.sendStatus(200)).catch(err => next(err)))
  .delete((req, res, next) =>
    personService.delete(req.params.id).then(data => res.sendStatus(200)).catch(err => next(err)))

export default personRouter
