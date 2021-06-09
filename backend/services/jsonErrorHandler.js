// Custom error handler to send unhandled errors in JSON instead of HTML.
// The error-handling middleware is a special type of Express middleware
// that needs to have four arguments as opposed to a regular middleware.
// eslint-disable-next-line no-unused-vars
const jsonErrorHandler = function (error, req, res, next) {
  if (process.env.NODE_ENV === "development") {
    console.error(error);
    return res.status(500).json({
      message: error.toString(),
      stackTrace: error.stack,
    });
  } else {
    // Hide error details in production to avoid security issues
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = jsonErrorHandler;
