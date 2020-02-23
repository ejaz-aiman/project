const { sendFailureResponse, response } = require("../utils/utils");

const { get, remove, create, update,reset } = require("../services/loaServices");

module.exports = {
  getLoa: async (req, res) => {
    try {
      const currentUserId = req.event.requestContext.authorizer.principalId;
      const role = req.event.requestContext.authorizer.role;
      let { errors, loa, statusCode, message, count } = await get({currentUserId, role});
      response({
        res,
        statusCode,
        message,
        errors,
        name: 'Loa',
        value: {loa},
        count
      })
    } catch (error) {
      console.log(error)
      return sendFailureResponse({
        res,
        message: error.message || 'Internal server error.',
        statusCode: error.statusCode || 500
      })
    }
  },
  deleteLoa: async (req, res) => {
    try {
      const currentUserId = req.event.requestContext.authorizer.principalId;
      const role = req.event.requestContext.authorizer.role;
      let { errors, deletedCount, statusCode, message } = await remove({ currentUserId, role, ids: req.query.ids });
      response({
        res,
        statusCode,
        message,
        errors,
        name: 'deletedCount',
        value: deletedCount
      })
    } catch (error) {
      console.log(error)
      return sendFailureResponse({
        res,
        message: error.message || 'Internal server error.',
        statusCode: error.statusCode || 500
      })
    }
  },
    createLoa: async (req, res) => {
    try {
      const currentUserId = req.event.requestContext.authorizer.principalId;
      const role = req.event.requestContext.authorizer.role;
      let { errors, createdLoa, statusCode, message } = await create({ currentUserId, role, loa: req.body });
      response({
        res,
        statusCode,
        message,
        errors,
        name: 'loa',
        value: createdLoa
      })
    } catch (error) {
      console.log(error)
      return sendFailureResponse({
        res,
        message: error.message || 'Internal server error.',
        statusCode: error.statusCode || 500
      })
    }
  },
  resetLoa: async (req, res) => {
    try {
      const currentUserId = req.event.requestContext.authorizer.principalId;
      const role = req.event.requestContext.authorizer.role;
      let { errors, statusCode, message} = await reset({currentUserId, role,id : req.params.id});
      response({
        res,
        statusCode,
        errors,
        message
      })
    } catch (error) {
      console.log(error)
      return sendFailureResponse({
        res,
        message: error.message || 'Internal server error.',
        statusCode: error.statusCode || 500
      })
    }
  },
  updateLoa: async (req, res) => {
    try {
      const currentUserId = req.event.requestContext.authorizer.principalId;
      const role = req.event.requestContext.authorizer.role;
      let { errors, updatedLoa, statusCode, message } = await update({ currentUserId, role, loa: req.body,id : req.params.id });
      response({
        res,
        statusCode,
        message,
        errors,
        name: 'updatedLoa',
        value: updatedLoa
      })
    } catch (error) {
      console.log(error)
      return sendFailureResponse({
        res,
        message: error.message || 'Internal server error.',
        statusCode: error.statusCode || 500
      })
    }
  },
};