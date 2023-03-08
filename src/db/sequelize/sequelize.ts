import { Sequelize } from 'sequelize-typescript'
import * as config from './database.json'
import { Auto } from '../models/auto'
import { Person } from '../models/person'
import { HouseHold } from '../models/household'
import { HouseHoldOwner } from '../models/householdowner'
import * as path from 'path'
import * as dotenv from 'dotenv'
dotenv.config({ path: path.join(process.cwd(), '.env') })

const models = { Auto, Person, HouseHold, HouseHoldOwner }

const env = process.env.NODE_ENV || 'development'

const sequelize = new Sequelize(process.env[config[env].use_env_variable])

sequelize.addModels(Object.values(models))

// console.log(sequelize)

const connection = { sequelize, ...models }

export default connection
