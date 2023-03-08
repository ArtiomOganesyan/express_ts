import * as express from 'express'
import * as dotenv from 'dotenv'
import * as path from 'path'
import { setRouters } from './src/routers'
import { setGlobalMiddlewares } from './src/middlewares/setGlobalMiddlewares'
import setErrorHandler from './src/middlewares/setErrorHandle'
dotenv.config({ path: path.join(process.cwd(), '.env') })

const app = express()

// Set Global Variables
const port = process.env.PORT || '3445'

// Set Global Middlewares
setGlobalMiddlewares(app)

// Set Routers
setRouters(app)

// Set Error Handlers
setErrorHandler(app)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
