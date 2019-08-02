// module.exports = {

//   RemoveObjectKeys: function (obj) {

//   }
// }


exports.RemoveObjectKeys = function (obj) {
  Object.keys(obj).forEach(key => {
    if (obj[key] && typeof obj[key] === "object") exports.RemoveObjectKeys(obj[key]); // recurse
    else if (obj[key] == null) delete obj[key]; // delete
  });

  return obj;
}

exports.IsNullOrWhiteSpace = function (str) {
  return str === null || str.match(/^ *$/) !== null;
}