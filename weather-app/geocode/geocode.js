const Req = require("request"); 

module.exports.geocodeAddress = (address, callback) => {
    Req({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
        json: true
    }, (err, res, body)=>{
        if(err) return callback(err);
        if(!body.results[0]) return callback("No Results");
        let response = body.results[0].geometry.location
        return callback(undefined, response); 
    });
};