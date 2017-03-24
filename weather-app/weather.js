const Req = require("request"); 


module.exports.getWeather = (lat,lng,callback) => {
    Req({
    url: `https://api.darksky.net/forecast/d1b036bdf566d924a5ace31b4708136e/${lat},${lng}`,
    json: true
  }, (err, res, body)=>{
    if(err){ 
      callback(err);
    }else{
      callback(undefined, body.currently.temperature);
    } 
  });
};