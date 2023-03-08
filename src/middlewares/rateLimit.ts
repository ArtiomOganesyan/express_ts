import rateLimit from 'express-rate-limit'

const limiter = rateLimit({
  windowMs: 1000 * 60 * 10, // - SET WINDOW
  max: 25, // - SET THE MAX AMOUNT OF CALLS PER WINDOW
  standardHeaders: true,
  legacyHeaders: false
})

export default limiter
