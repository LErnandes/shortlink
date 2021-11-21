function takeId(url) {
  if (url.includes("/")) {
    let id = url.split("/");
    return id[id.length-1];
  }
}

module.exports = { takeId };
