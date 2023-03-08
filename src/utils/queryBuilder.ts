export const queryBuilder = (filter, sort) => {
  const where = {}

  const whereArr = Object.entries(filter)

  if (whereArr.length) {
    whereArr.forEach(([key, value]) => { where[key] = value })
  }

  return { where, order: sort }
}
