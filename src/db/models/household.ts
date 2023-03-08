import {
  Model, Column, Table, Scopes, BelongsToMany
} from 'sequelize-typescript'
import { ScopesEnum } from '../enums/Scopes'
import { Tables } from '../enums/Tables'
import { HouseHoldOwner } from './householdowner'
import { Person } from './person'

@Scopes(() => ({
  [ScopesEnum.OWNERS]: {
    include: Person
  }
}))
@Table({
  tableName: Tables.HOUSE_HOLDS
})
export class HouseHold extends Model {
  @Column
    income: number

  @BelongsToMany(() => Person, () => HouseHoldOwner)
    person: Person[]
}
