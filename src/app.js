const express = require("express")
const { test_geocode } = require("./utils/geocode")
const geocode = require("./utils/geocode")
const forecast = require("./utils/weather")
var app = express()

const port = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("<h1> url'de istenilensehir kismina istediginiz sehri giriniz. </h1> /n <p> Oyku Parlak </p>")
})


app.get("/weather/:sehir", (req, res) => {

    geocode.test_geocode(req.params.sehir, (error, data) => {

        if (error) {
            return res.send(error)
        } else {
            const enlem = data.features[0].center[1]
            const boylam = data.features[0].center[0]
            return weather.test_weather(enlem, boylam, (error, data) => {
                if (error) {
                    return res.send(error)
                } else {
                    const location = data.location.region
                    const zaman = data.location.timezone_id
                    const saat = data.location.localtime
                    const sicaklik = data.current.temperature
                    const desc = data.current.weather_descriptions[0]

                    return res.send({ konum, zaman, saat, sicaklik, desc })
                    
                }
            })
        }

    })
})

app.get("")
app.listen(port, () => {
    console.log("3000 portundayım");
})



