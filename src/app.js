const express = require("express")
const { test_geocode } = require("./utils/geocode")
const geocode = require("./utils/geocode")
const forecast = require("./utils/weather")
var app = express()

const port = process.env.PORT || 3000




app.get("")
app.listen(port, () => {
    console.log("3000 portundayım");
})