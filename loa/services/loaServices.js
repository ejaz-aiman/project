const { loa: Loa } = require("../models");

// const { validateCarrierGroupData } = require("../utils/validations");

const errorCodes = require("../utils/errorCodes");
const {roles} = require('../utils/constants');
module.exports = {
  get: async (currentUserId, role) => {
    let where = {};
    if (role != roles.ADMIN) {
      where = { currentUserId }
    }
    let loa = await Loa.findAndCountAll({
      where
    });
    if (!loa)
      throw { message: 'Not found', statusCode: 404 }
    const count = loa.count;
    loa = loa.row.map(item => item.dataValues);
    return {
      count,
      loa,
      message: 'Success',
      errors: [],
      statusCode
    }
  }
}