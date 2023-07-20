
export function RemoveObjectKeys(obj) {
  Object.keys(obj).forEach(key => {
    if (obj[key] && typeof obj[key] === "object") RemoveObjectKeys(obj[key]); // recurse
    else if (obj[key] == null) delete obj[key]; // delete
  });

  return obj;
}

export function IsNullOrWhiteSpace(str) {
  return str === null || str.match(/^ *$/) !== null;
}
