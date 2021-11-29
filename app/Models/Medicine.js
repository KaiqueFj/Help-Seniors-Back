'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Medicine extends Model {
  medicines() {
    return this.belongsTo('App/Models/User')
  }

  status () {
    return this.hasMany('App/Models/Status')
  }
}

module.exports = Medicine