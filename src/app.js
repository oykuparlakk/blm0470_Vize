const express = require("express")
const { test_geocode } = require("./utils/geocode")
const geocode = require("./utils/geocode")
const forecast = require("./utils/weather")
var app = express()

const router = express.Router()

const port = process.env.PORT || 3000
var ogrenciJSON = require(test.json);

app.get("/", (req, res) => {
    res.send("<h1> url'de istenilen sehir kismina istediginiz sehri giriniz. </h1> /n <p> Oyku Parlak </p>")
})
//denemeee

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

                    return res.send({ location, zaman, saat, sicaklik, desc })
                    
                }
            })
        }

    })
})

router.get('/test', (req, res, next) => {
    console.log(req.params)
    res.render('test')
  })

var string = JSON.parse(ogrenciJSON);
console.log("Bilgilerim")
string.forEach(item =>{
  console.log("ad soyad: "+item.adSoyad+", numara: "+item.model);
})


app.get("")
app.listen(port, () => {
    console.log("3000 portundayım");
})



