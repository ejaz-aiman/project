const { loa: Loa } = require("../models");

// const { validateCarrierGroupData } = require("../utils/validations");

const errorCodes = require("../utils/errorCodes");
const { roles } = require('../utils/constants');
module.exports = {
  get: async ({currentUserId, role}) => {
    let where = {};
    if (role != roles.ADMIN) {
      where = { currentUserId }
    }
    let loa = await Loa.findAll({
      where
    });

    if (!loa.length) { throw { message: 'Not found', statusCode: 404 } }
    loa = loa.map(item => item.dataValues);
    return {
      loa,
      message: 'Success',
      errors: [],
      statusCode: 200
    }
  },
  remove: async ({currentUserId, role, ids}) => {
    if (!ids) throw { message: 'Id(s) required.', statusCode: 400 }
    ids = ids.split(',');
    let where = {
      id: { in: ids }
    }
    if (role != roles.ADMIN) {
      where.currentUserId = currentUserId;
    }
    const deletedCount = await Loa.destroy({
      where
    });
    return {
      deletedCount,
      message: 'Success',
      errors: [],
      statusCode: 200
    }
  },
  reset: async ({currentUserId, role, id}) => {
    if (!id) throw { message: 'Id required.', statusCode: 400 }
    const loa = await Loa.findOne({
      where : {id,currentUserId}
    })
    if(!loa) throw { message: 'Not found.', statusCode: 404 }
    await Loa.update({
      signature_name : null,
      signature_font_style : null,
      is_agree: null,
      is_signed: null
    },
    {where : {id,currentUserId}})
    return {
      message: 'Success',
      errors: [],
      statusCode: 200
    }
  },
}