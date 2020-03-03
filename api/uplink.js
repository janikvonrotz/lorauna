module.exports = (req, res) => {
  // Log request
  console.log(JSON.stringify(req.body, null, 2))

  res.send('This is the Lorauna IoT uplink endpoint.')
}
