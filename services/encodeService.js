const Url = require("../model/Url");

async function encode(url) {
    let shortUrl = await Url.findOne({ url });
    if (!shortUrl) {
        shortUrl = new Url({ url });

        await shortUrl.save();
    }
    

    return `example.com/${shortUrl._id}`;
}

module.exports = { encode };
