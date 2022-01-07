const request = require('request')

/* const url = "http://api.weatherstack.com/current?access_key=624b54435945167952bc0f9eb714c150&query=37.8267,-122.4233&units=f"
request({ url: url, json: true}, (error, response) => {
    if(error){
        console.log("Unable to connect to weather app!")
    }else if(response.body.error){
        console.log("Unable to find the location")
    }
    else{
        const temperature = response.body.current.temperature
        const feelslike = response.body.current.feelslike
        const str = response.body.current.weather_descriptions[0] + ". The current temperature is "+temperature+" degrees, but it feels like it's "+feelslike+" degrees."
        console.log(str)
    }
}) */

const geocodeurl = "https://api.mapbox.com/geocoding/v5/mapbox.places/mumbai.json?access_token=pk.eyJ1IjoiYXNtaXRhayIsImEiOiJja3hzbG1pcmswdTBvMnJtcGNxeHJuNzNtIn0.oYfwcvrkKtpA_GcLJ-hStQ"   //Los%20Angeles
request({ url: geocodeurl, json: true}, (error, response) => {
    if(error){
        console.log("Unable to connect to weather app!")
    }else if(response.body.features.length === 0){
        console.log("Unable to find the location")
    }else{
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(latitude,longitude)
    }
})