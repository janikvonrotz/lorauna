const fetch = require('node-fetch')

module.exports = async (req, res) => {
  // Log request
  console.log(JSON.stringify(req.body, null, 2))

  let saunaId = ''
  if (req.body.dev_id === 'device1') {
    saunaId = '5bce139792a5f41e7aa6382b'
  }
  if (req.body.dev_id === 'device2') {
    saunaId = '5e5ebf1d9e960b00086f46f0'
  }

  const temperatureValue = req.body.payload_fields.TempC1

  const response = await fetch(`${req.headers['x-forwarded-proto']}://${req.headers['x-forwarded-host']}/api`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: `mutation { createTemperature(value: ${temperatureValue}, sauna_id: "${saunaId}") { _id, created } }` })
  })
  const text = await response.text()
  const json = JSON.parse(text)
  console.log(JSON.stringify(json, null, 2))

  res.send('This is the Lorauna IoT uplink endpoint.')
}
