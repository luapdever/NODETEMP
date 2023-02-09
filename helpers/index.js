exports.json_res = (
  res,
  message = "",
  status = 200,
  data = null,
  error = null
) => {
  return res.status(status).send({
    success: status >= 200 && success < 300 ? true : false,
    message,
    data,
    error,
  });
};
