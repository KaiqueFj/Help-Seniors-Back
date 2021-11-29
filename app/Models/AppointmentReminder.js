'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AppointmentReminder extends Model {
  appointmentReminder() {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = AppointmentReminder