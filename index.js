const express = require("express")
const app = express()
const port = 3000
const path = require("path")

app.use(express.static('public'))
app.use('/metaballs', express.static('public/code/metaballs'))

app.use((req, res) => {
    if (res.status(404)) {
        res.send("404")
    }
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});