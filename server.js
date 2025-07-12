const express = require('express')

const app = express()
const port = 3069

app.get('/towerHeight', (req, res) => {
    return 5
})

app.listen(port, async () => {
    console.log(`Tempy API listening at port http://localhost:${port}`)
})
