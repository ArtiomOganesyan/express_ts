import connection from '../../db/sequelize/sequelize'
import ServiceFactory from '../../utils/ServiceFactory'
import { Auto as AutoModel } from '../../db/models/auto'

const { Auto } = connection

class AutoService extends ServiceFactory<AutoModel> {
  // You can set new methods or override methods from ServiceFactory
}

export default new AutoService(Auto)
