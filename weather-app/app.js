const Yargs = require('yargs');

const Geo = require("./geocode/geocode.js");
const Weather = require("./weather.js");


const Argsv = Yargs.options({
   a: {
       demand: true, 
       alias: "address",
       describe: "Address to fetch weather",
       string: true
   } 
}).help().alias("help", "h").argv;

Geo.geocodeAddress(encodeURI(Argsv.a), (err, succ)=>{
  if(err) return JSON.stringify(err);
  Weather.getWeather(succ.lat, succ.lng, (err, succ)=>{
    if(err) return console.log(err);
    console.log(succ);
  }); 
});
