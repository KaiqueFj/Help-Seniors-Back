'use strict'

const Model = use('Model')
const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }

  medicines () {
    return this.hasMany('App/Models/Medicine')
  }

  hospitals() {
    return this.hasMany('App/Models/Hospital')
  }

  appointments() {
    return this.hasMany('App/Models/Consulta')
  }

  AppointmentReminder() {
    return this.hasMany('App/Models/AppointmentReminder')
  }
}

module.exports = User