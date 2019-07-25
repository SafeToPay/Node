var functions = {

     RemoveObjectKeys: function(obj){
        Object.keys(obj).forEach(key => {
            if (obj[key] && typeof obj[key] === "object") functions.RemoveObjectKeys(obj[key]); // recurse
            else if (obj[key] == null) delete obj[key]; // delete
          });
    
          return obj;
    }
}



module.exports = functions;