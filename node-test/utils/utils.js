module.exports.add = (a,b)=> a + b;
module.exports.square = (a)=> a * a;
module.exports.setName = (user, fullName)=>{
    let name = fullName.split(' ');
    user.firstName = name[0];
    user.lastName = name[1];
    return user; 
};

module.exports.ascynAdd = (a, b, callback)=>{
    setTimeout(()=>{
        callback(a + b);
    }, 100);
};