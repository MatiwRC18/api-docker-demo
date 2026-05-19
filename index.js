const express = require('express')
const app = express()
const PORT = 3002

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ status: 'ok', mensaje: 'API corriendo correctamente' })
})

app.listen(PORT, () => {
  console.log('Servidor corriendo en puerto ' + PORT)
})
