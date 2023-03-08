import {
  Model, Column, Table, Scopes, BelongsToMany, HasMany
} from 'sequelize-typescript'
import { ScopesEnum } from '../enums/Scopes'
import { Tables } from '../enums/Tables'
import { Auto } from './auto'
import { HouseHold } from './household'
import { HouseHoldOwner } from './householdowner'

@Scopes(() => ({
  [ScopesEnum.FULL]: {
    include: [
      HouseHold,
      Auto
    ]
  },
  [ScopesEnum.WITH_HOUSEHOLD]: {
    include: HouseHold
  },
  [ScopesEnum.WITH_AUTO]: {
    include: Auto
  }
}))
@Table({
  tableName: Tables.PEOPLE
})
export class Person extends Model {
  @Column
    fullName: string

  @Column
    age: number

  @BelongsToMany(() => HouseHold, () => HouseHoldOwner)
    houseHold: HouseHold[]

  @HasMany(() => Auto)
    auto: Auto[]
}
