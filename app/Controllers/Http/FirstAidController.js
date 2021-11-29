'use strict'

const FirstAid = use('App/Models/FirstAid')


class FirstAidController {
  async store({ request, response, }) {

    try {
      const {
        name,
        procedureIntroduction,
        procedure,
        videoLink,
      } = request.all();

      const data = {
        name: name,
        procedureIntroduction: procedureIntroduction,
        procedure: procedure,
        videoLink: videoLink,
      }

      await FirstAid.create(data);
      return response.status(200).json()

    } catch (error) {
      console.log(error)
      return response.json(error)
    }
  }

  async show() {
    try {
      return FirstAid.all()

    } catch (error) {
      return response
        .status(err.status)
        .send(err)
    }

  }
}

module.exports = FirstAidController