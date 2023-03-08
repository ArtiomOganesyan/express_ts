import { checkSchema } from 'express-validator'

const personValidation = {
  create: checkSchema({
    fullName: {
      in: 'body',
      errorMessage: 'Person should have a full name',
      isString: true
    },
    age: {
      in: 'body',
      errorMessage: 'Person should have age',
      isInt: true
    }
  }),
  update: checkSchema({
    id: {
      in: 'params',
      isInt: true,
      toInt: true,
      errorMessage: 'Need to pass a valid HouseHold ID'
    },
    fullName: {
      optional: true,
      in: 'body',
      errorMessage: 'Person should have a full name',
      isString: true
    },
    age: {
      optional: true,
      in: 'body',
      errorMessage: 'Person should have age',
      isInt: true
    }
  })
}

export default personValidation
