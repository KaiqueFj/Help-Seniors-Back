'use strict'

const Help = use('App/Models/Help');

class HelpController {
  async store({ request, response, }) {

    try {
      const {
        title,
        videoLink,
      } = request.all();

      const data = {
        title: title,
        videoLink: videoLink,
      }

      await Help.create(data);
      return response.status(200).json()

    } catch (error) {
      console.log(error)
      return response.json(error)
    }
  }

  async show() {
    try {
      return Help.all()

    } catch (error) {
      return response
        .status(err.status)
        .send(err)
    }

  }
}

module.exports = HelpController