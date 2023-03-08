import { checkSchema } from 'express-validator'

const autoValidation = {
  create: checkSchema({
    model: {
      in: 'body',
      errorMessage: 'Model should be a string',
      isString: true
    },
    year: {
      in: 'body',
      errorMessage: 'Year should be numeric',
      isInt: true
    },
    owner_id: {
      in: 'body',
      errorMessage: 'Year should be numeric',
      isInt: true
    }
  }),
  update: checkSchema({
    id: {
      in: 'params',
      isInt: true,
      toInt: true,
      errorMessage: 'Need to pass a valid AUTO ID'
    },
    model: {
      optional: true,
      in: 'body',
      errorMessage: 'Model should be a string',
      isString: true
    },
    year: {
      optional: true,
      in: 'body',
      errorMessage: 'Year should be numeric',
      isInt: true
    },
    owner_id: {
      optional: true,
      in: 'body',
      errorMessage: 'Year should be numeric',
      isInt: true
    }
  })
}

export default autoValidation
