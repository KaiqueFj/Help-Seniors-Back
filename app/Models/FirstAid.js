'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class FirstAid extends Model {

  firstAid() {
    return this.belongsTo('App/Models/FirstAid')
  }
}

module.exports = FirstAid