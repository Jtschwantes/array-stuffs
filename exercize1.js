//Data
let arr = [
    { key: "year", value: "2016" },
    { key: "make", value: "Porsche" },
    { key: "model", value: "911 R" },
    { key: "color", value: "white" },
    { key: "msrp", value: "$184,900" }
];

//What
let newArr = arr.filter(function (value){
    return value.key !== "msrp";

}).reduce(toObject, {});
console.log(newArr);

//How
function toObject(obj, cur){
    obj[cur.key] = cur.value;
    return obj;
}

/* Output
  { 
    year: '2016', 
    make: 'Porsche', 
    model: '911 R', 
    color: 'white' 
  }
*/