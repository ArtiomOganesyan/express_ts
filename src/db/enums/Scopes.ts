/* eslint-disable no-unused-vars */
/**
 * Enum for sequelize scopes
 * For usage in services and models
 * @export
 * @enum {number}
 */
export enum ScopesEnum {
    FULL = 'full',
    OWNERS = 'owners',
    WITH_AUTO = 'withEmployees',
    WITH_HOUSEHOLD = 'withHoursHold',
}
