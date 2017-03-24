const Yargs = require('yargs');
const Axios = require('axios');


const Argsv = Yargs.options({
   a: {
       demand: true, 
       alias: "address",
       describe: "Address to fetch weather",
       string: true
   } 
}).help().alias("help", "h").argv;

let encodedStr = encodeURI(Argsv.address);
let address = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedStr}`;

Axios.get(address).then((response)=>{
    
    if(response.data.status === "ZERO_RESULTS"){
        throw new Error("Cannot find that address");
    }

    console.log(response.data.results[0].formatted_address);

    let lat = response.data.results[0].geometry.location.lat;
    let lng = response.data.results[0].geometry.location.lng;
    let weatherUrl = `https://api.darksky.net/forecast/d1b036bdf566d924a5ace31b4708136e/${lat},${lng}`;

    return Axios.get(weatherUrl); 

}).then((response)=>{
    var temp = response.data.currently.temperature; 
    console.log("Temperature:",temp);
}).catch((err)=>{
    if(err.code === "ENOTFOUND"){
        console.log("could not connect to server");
    }else{
        console.log(err.message);
    }
    
});



















