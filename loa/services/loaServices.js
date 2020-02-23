const { loa: Loa } = require("../models");

const { validateLoa, validateUpdateLoa } = require("../utils/validations");

const errorCodes = require("../utils/errorCodes");
const { roles } = require('../utils/constants');
module.exports = {
  get: async ({ currentUserId, role }) => {
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
  remove: async ({ currentUserId, role, ids }) => {
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
  create: async ({ currentUserId, role, loa }) => {
    let errors = validateLoa({ data: loa });
    if (errors) {
      return {
        errors,
        statusCode: 400,
        message: 'Validation error'
      }
    }
    let createdLoa = await Loa.create({
      name: loa.name,
      doc_type: loa.doc_type,
      currentUserId
    })
    createdLoa = createdLoa.dataValues;
    return {
      createdLoa,
      message: 'Success',
      errors: [],
      statusCode: 201
    }
  },
  update: async ({ currentUserId, role, loa, id }) => {
    if (!id) { throw { message: 'Id is required.', statusCode: 400 } }
    let errors = validateUpdateLoa({ data: loa });
    if (errors) {
      return {
        errors,
        statusCode: 400,
        message: 'Validation error'
      }
    }
    const ifLoaExist = await Loa.findOne({
      where: { id, currentUserId }
    })
    if (!ifLoaExist) { throw { message: 'Not found', statusCode: 404 } }
    let updatedLoa = await Loa.update({
      signature_name: loa.signature_name,
      signature_font_style: loa.signature_font_style,
      is_agree: loa.is_agree,
      is_signed: true
    },
      {
        where: { id, currentUserId }, returning: true
      });
    updatedLoa = updatedLoa[1][0].dataValues;
    return {
      updatedLoa,
      message: 'Success',
      errors: [],
      statusCode: 200
    }
  },
}