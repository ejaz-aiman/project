module.exports = {
  sendSuccessResponse: ({ res, data = {}, message, statusCode, count }) => {
    if (count) {
      data.count = count;
    }

    let response = {
      data
    };

    if (message) {
      response.message = message;
    }

    return res.status(statusCode).json(response);
  },

  sendFailureResponse: ({ res, message, statusCode, errors = [] }) => {
    let response = {
      error: errors.length > 0 ? errors : message
    };

    return res.status(statusCode).json(response);
  },
  asyncForEach: async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  },
  response: function({ message, statusCode, errors, name, value, res, count }) {
    if (statusCode != 200 && statusCode != 201)
      module.exports.sendFailureResponse({ res, message, statusCode, errors });
    else
      module.exports.sendSuccessResponse({
        res,
        data: { [name]: value },
        message,
        statusCode,
        count
      });
  }
};
