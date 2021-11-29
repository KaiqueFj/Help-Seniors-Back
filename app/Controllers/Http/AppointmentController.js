'use strict'

const AppointmentReminder = use('App/Models/AppointmentReminder');


class AppointmentController {

  // creating and saving a new appointment
  async store({ request, response, auth }) {
    try {

      // Get User information
      await auth.check()
      const user = await auth.getUser()

      // Get variables from front-end
      const {
        hospitalName,
        specialty,
        day,
        time,
        contactPhone,
      } = request.all();

      const data = {
        user_id: user.id,
        hospitalName: hospitalName,
        specialty: specialty,
        day: day,
        time: time,
        contactPhone: contactPhone,
        status: 'loading'
      }

      await AppointmentReminder.create(data);
      return response.status(200).json()

    } catch (err) {
      return response
        .status(err.status)
        .send(err)
    }
  }

  async show({ auth }) {
    try {

      await auth.check()
      const data = AppointmentReminder.all()
      return data

    } catch (error) {
      return response
        .status(err.status)
        .send(err)
    }

  }

  async update({ request, response, auth }) {

    try {
      // Check user and get his informations
      await auth.check()

      // Get variables from front-end
      const { appointmentReminderId, status } = request.all();

      await AppointmentReminder
        .query()
        .where('id', appointmentReminderId)
        .update({ status: status })

      return response.json("Os dados foram atualizados com sucesso!")

    } catch (error) {

      console.log(error)
      return response.json("Não foi possível atualizar os dados!")

    }
  }

  async delete({ request, response }) {

    try {
      const { appointmentReminderId } = request.all();

      await AppointmentReminder.query().where('id', appointmentReminderId).delete();
      return response.status(200).json("Lembrete de consulta deletado com sucesso!")

    } catch (error) {
      return console.log(error)
    }
  }
}

module.exports = AppointmentController