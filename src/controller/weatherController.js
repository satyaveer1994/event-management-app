const { getWeather } = require('../utils/weatherAPI');

exports.getWeather = async (req, res) => {
  try {
    const { location } = req.params;
    const weather = await getWeather(location);
    res.json({ weather });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
