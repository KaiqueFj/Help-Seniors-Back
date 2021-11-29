'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AppointmentReminderSchema extends Schema {
  up () {
    this.create('appointment_reminders', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.string('hospitalName', 80).notNullable()
      table.string('specialty', 80).notNullable()
      table.string('day', 15).notNullable()
      table.string('time', 5).notNullable()
      table.string('contactPhone', 25).notNullable()
      table.string('status', 14).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('appointment_reminders')
  }
}

module.exports = AppointmentReminderSchema