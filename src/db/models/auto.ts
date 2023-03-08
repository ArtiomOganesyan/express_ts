import {
  Model, Column, Table, BelongsTo, ForeignKey, Scopes
} from 'sequelize-typescript'
import { ScopesEnum } from '../enums/Scopes'
import { Tables } from '../enums/Tables'
import { Person } from './person'

@Scopes(() => ({
  [ScopesEnum.OWNERS]: {
    include: Person
  }
}))
@Table({
  tableName: Tables.AUTOS
})
export class Auto extends Model {
  @Column
    model: string

  @Column
    year: number

  @ForeignKey(() => Person)
    owner_id: number

  @BelongsTo(() => Person)
    owner: Person
}
