const Url = require("../model/Url");
const urlService = require("../services/urlService");

async function decode(url) {
    let id = urlService.takeId(url);
    let longUrl = await Url.findById(id);
    if (longUrl) return longUrl.url;
    return longUrl;
}

module.exports = { decode };
