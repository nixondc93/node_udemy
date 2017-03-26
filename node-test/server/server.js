const Express = require('express');


let app = Express(); 

app.get('/', (req, res)=>{
    res.send('hello world');
});

app.listen(3000);

module.exports.app = app; 

