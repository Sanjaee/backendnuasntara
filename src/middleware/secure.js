const apikey = "G8XcZJLaeJTx0jQq"
const secure = async (req, res, next) => {
  const auth = req.header("API_KEY");
  if (!auth || auth !== apikey) {
    return res.status(201).json({
      status: 201,
      message:
        "Succsessfully",
    });
  } else {
    next();
  }
};

module.exports = secure;