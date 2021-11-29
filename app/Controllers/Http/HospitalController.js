'use strict'

const Hospital = use('App/Models/Hospital')


class HospitalController {
  async store({ request, response, auth }) {

    try {
      const hosp_data = request.all();

      const user = await Hospital.create(hosp_data);
      await user.save()

      return response.status(201).send("Hospital cadastrado com sucesso");

    } catch (error) {
      console.log(error)
    }
  }

  //retrieve all hospitals
  async show() {
    const hosp = Hospital.all()
    return hosp
  }
}

module.exports = HospitalController