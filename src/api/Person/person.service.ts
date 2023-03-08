import { ScopesEnum } from '../../db/enums/Scopes'
import { Person as PersonModel } from '../../db/models/person'
import connection from '../../db/sequelize/sequelize'
import ServiceFactory from '../../utils/ServiceFactory'

const { Person } = connection

class PersonService extends ServiceFactory<PersonModel> {
  getAll () {
    return this.model.scope(ScopesEnum.FULL).findAll()
  }
}

export default new PersonService(Person)
