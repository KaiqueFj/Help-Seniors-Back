'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MedicinesSchema extends Schema {
  up() {
    this.create('medicines', (table) => {  //criação da tabela eventos no db, e sua estrutura
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.string('name').notNullable()
      table.date('initialDate').notNullable()
      table.date('finalDate').notNullable()
      table.string('time').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('medicines')
  }
}

module.exports = MedicinesSchema