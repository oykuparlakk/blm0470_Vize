const { response } = require("express");
const request = require("request")

const ogrenciAdi= 'Oyku Parlak';
const ogrenciNumarasi='18360859019';


const test_geocode = (sehir, callback) => {
    const url =`https://api.mapbox.com/geocoding/v5/mapbox.places/${sehir}.json?access_token=pk.eyJ1IjoiY2FueWFoeWEiLCJhIjoiY2tucTZ2a3ZlMDI4ZzMzbnQzY29wd24wdiJ9.Stz8gEheY66xXHzzQTVZow&limit=1`

    request({url: url,json: true },(err,res)=>{

        if(err){
            callback(err,undefined);
        }else{
            callback(undefined,res.body)
        }
    });
}
const test_text =() =>{

    return res.send('<p> 18360859019-Öykü Parlak </p>');
}

module.exports = {
    test_geocode : test_geocode,
    test_text : test_text,

}

