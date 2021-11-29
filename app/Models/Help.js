'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Help extends Model {
  help() {
    return this.belongsTo('App/Models/Help')
  }
}

module.exports = Help