import { Model, ModelCtor } from 'sequelize-typescript'
import { CreationAttributes } from 'sequelize/types/model'
import { queryBuilder } from './queryBuilder'

class ServiceFactory<M extends Model> {
  model: ModelCtor<M>
  constructor (model: ModelCtor<M>) {
    this.model = model
  }

  getAll ():Promise<M[]> { return this.model.findAll() }

  getAllByQuery (filter, sort) {
    const query = queryBuilder(filter, sort)
    return this.model.findAll(query)
  }

  getOneById (id:number):Promise<M> { return this.model.findByPk(id) }

  // TODO: data should have a clear type
  create (data:CreationAttributes<M>):Promise<M> { return this.model.create(data) }

  update (data, id) {
    return this.model.update(data, { where: { id } })
  }

  delete (id):Promise<number> { return this.model.destroy({ where: { id } }) }
}

export default ServiceFactory
