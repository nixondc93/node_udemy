const Req = require('request');

let geocodeReq = (address) => {
    address = encodeURI(address);
    return new Promise((resolve, reject) =>{
        Req({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
            json: true
        }, (err, res, body)=>{
            if(err) return reject(err);
            if(!body.results[0]) return reject("No Results");
            let response = body.results[0].geometry.location
            return resolve(response); 
        });
    });
}

geocodeReq("san francisco ca")
    .then((location)=>console.log(location))
    .catch((err)=> console.log(err));
