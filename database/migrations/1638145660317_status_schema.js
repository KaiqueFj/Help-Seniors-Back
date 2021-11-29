'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StatusSchema extends Schema {
  up() {
    this.create('statuses', (table) => {
      table.increments()
      table
        .integer('medicine_id')
        .unsigned()
        .references('id')
        .inTable('medicines')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')

      table.integer('status').notNullable()
      table.date('date').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('statuses')
  }
}

module.exports = StatusSchema