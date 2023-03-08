const setErrorHandler = (app) => {
  app.use((error, req, res, next) => {
    if (Array.isArray(error)) {
      res.json(error)
      return
    }
    res.json({ msg: error.message, stack: error.stack })
  })
  return app
}

export default setErrorHandler
