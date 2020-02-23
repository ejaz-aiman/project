const { sendFailureResponse, response } = require("../utils/utils");

const { get, remove,reset } = require("../services/loaServices");
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
        value: loa,
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
  resetLoa: async (req, res) => {
    try {
      const currentUserId = req.event.requestContext.authorizer.principalId;
      const role = req.event.requestContext.authorizer.role;
      let { errors, statusCode, message} = await reset({currentUserId, role,id : req.params.id});
      response({
        res,
        statusCode,
        message,
        errors
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