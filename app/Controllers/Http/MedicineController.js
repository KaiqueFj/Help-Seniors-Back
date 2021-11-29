'use strict'

const User = use('App/Models/User');
const Medicine = use('App/Models/Medicine');
const Status = use('App/Models/Status');

// import moment from 'moment';
const moment = require('moment')



class MedicineController {

  // Register Medicine
  async register({ request, auth, response }) {

    try {
      // Get User information
      await auth.check()
      const user = await auth.getUser()

      // Request input from page
      const { name, initialDate, finalDate, time } = request.all(); // info do evento

      const data = {
        user_id: user.id,
        name: name,
        initialDate: initialDate,
        finalDate: finalDate,
        time: time,
      }

      // Save user in database
      await Medicine.create(data);
      return response.status(200).json()

    } catch (error) {
      return console.log(error)
    }

  }

  async show({ request, auth, response }) {

    const dateNow = moment().format('YYYY-MM-DD');

    await auth.check()
    const user = await auth.getUser()
    const medicine = await Medicine.query().where('initialDate', '>=', dateNow, 'and', 'user_id', user.id).fetch();

    const statusOfMedicines = await Status.query()
      .table('statuses')
      .select('medicines.id', 'medicines.name', 'medicines.time', 'medicines.initialDate', 'medicines.finalDate', 'status', 'statuses.date')
      .innerJoin('medicines', 'medicines.id', 'statuses.medicine_id').fetch()

    return [medicine, statusOfMedicines]
  }

  async addStatus({ request, auth, response }) {

    try {

      // Request input from page
      const { medicineId, status, date } = request.all(); // info do evento

      const data = {
        medicine_id: medicineId,
        status: status,
        date: date,
      }

      await Status.create(data);
      return response.status(200).json()

    } catch (error) {
      return console.log(error)
    }
  }

  async delete({ request, response }) {

    try {
      const { medicineId } = request.all();

      await Medicine.query().where('id', medicineId).delete();
      return response.status(200).json("Medicine has been deleted")

    } catch (error) {
      return console.log(error)
    }
  }
}

module.exports = MedicineController