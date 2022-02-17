const request = require('request')
const forecast = (latitude,longitude,callback) => {
    const url = "http://api.weatherstack.com/current?access_key=624b54435945167952bc0f9eb714c150&query="+latitude+","+longitude+"&units=f"
    request({ url: url, json:true}, (error, response) => {
        if(error){
            callback('Unable to connect with Location services',undefined)
        }else if(response.body.error){
            callback('Unable to connect with Location services. Try again.',undefined)
        }else{
            callback(undefined,response.body.current.weather_descriptions[0] + ". The current temperature is "+response.body.current.temperature+" degrees, but it feels like it's "+response.body.current.feelslike+" degrees.")
        }
    })
}

module.exports = forecast