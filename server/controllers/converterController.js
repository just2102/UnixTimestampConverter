const dotenv = require("dotenv").config();

const dateToUnix = async (req, res) => {
  const dateString = req.body.dateString;
  let unixTimestamp;

  try {
    const date = new Date(dateString);
    unixTimestamp = date.getTime() / 1000;
    res.status(200).json({ status: "OK", unix: unixTimestamp });
  } catch (error) {
    res.status(200).json({status: "BAD", error:error})
  }
};

const unixToDate = async (req, res) => {
  const unixTimestamp = req.body.unixTimestamp
  let date;

  try {
    const ms = unixTimestamp * 1000;
    date = new Date(ms);
    res.status(200).json({ status: "OK", date: date });
  } catch (error) {
    res.status(200).json({status: "BAD", error:error})
  }
};

module.exports = {
  dateToUnix,
  unixToDate,
};
