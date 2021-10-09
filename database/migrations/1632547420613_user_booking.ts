import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UserBooking extends BaseSchema {
  protected tableName = 'user_booking'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('user_id').unsigned().references('users.id')
      table.integer('booking_id').unsigned().references('bookings.id')
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
