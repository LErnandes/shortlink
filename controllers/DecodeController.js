const decodeService = require("../services/decodeService");

async function decode(req, res) {
  try {
    const { url } = req.query;
    longUrl = await decodeService.decode(url);
    if (!longUrl) res.status(400).send({ message: "Url not found" });
    
    res.json({ longUrl });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error finding short url" });
  }
}

module.exports = { decode };
