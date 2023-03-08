import {
  Model, Column, Table, ForeignKey
} from 'sequelize-typescript'
import { Tables } from '../enums/Tables'
import { HouseHold } from './household'
import { Person } from './person'

@Table({
  tableName: Tables.HOUSE_HOLD_OWNERS
})
export class HouseHoldOwner extends Model {
  @ForeignKey(() => Person)
  @Column
    owner_id: number

  @ForeignKey(() => HouseHold)
  @Column
    house_hold_id: number
}
