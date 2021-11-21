const encodeService = require("../services/encodeService");

async function encode(req, res) {
  try {
    const { url } = req.body;

    let shortUrl = await encodeService.encode(url);
    if (!shortUrl) res.status(400).send({ message: "Url not valid" });
    
    res.json({ shortUrl });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error creating short url" });
  }
}

module.exports = { encode };
