'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HelpSchema extends Schema {
  up () {
    this.create('helps', (table) => {
      table.increments()
      table.text('title', 100).notNullable().unique()
      table.text('videoLink',1500).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('helps')
  }
}

module.exports = HelpSchema