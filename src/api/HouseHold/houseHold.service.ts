import { HouseHold as HouseHoldOwner } from 'src/db/models/household'
import connection from '../../db/sequelize/sequelize'
import ServiceFactory from '../../utils/ServiceFactory'

const { HouseHold, Person } = connection

class HouseHoldService extends ServiceFactory<HouseHoldOwner> {
  createWithOwners (data) {
    return this.model.create(data, { include: Person })
  }
}

export default new HouseHoldService(HouseHold)
