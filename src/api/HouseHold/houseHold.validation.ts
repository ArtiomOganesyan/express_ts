import { checkSchema } from 'express-validator'

const houseHoldValidation = {
  create: checkSchema({
    income: {
      in: 'body',
      errorMessage: 'Income should be a number',
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
    income: {
      optional: true,
      in: 'body',
      errorMessage: 'Model should be a string',
      isInt: true
    }
  }),
  createWithOwner: checkSchema({
    income: {
      in: 'body',
      errorMessage: 'Income should be a number',
      isInt: true
    },
    person: {
      in: 'body',
      isArray: true
    },
    'person.*.fullName': {
      in: 'body',
      errorMessage: 'Person should have a full name',
      isString: true
    },
    'person.*.age': {
      in: 'body',
      errorMessage: 'Person should have age',
      isInt: true
    }
  })
}

export default houseHoldValidation
