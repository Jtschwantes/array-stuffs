// Data
let arr = [
    {
        key: "name", value: "jared"
    },
    {
        key: "age", value: "old",
    },
    {
        key: "food", value: "bacon"
    },
    {
        key: "food", value: "pizza"
    },
    {
        key: "pet", value: "dog"
    },
    {
        key: "food", value: "wings"
    },
    {
        key: "pet", value: "fish"
    }
];

// What
let newArr = arr.reduce(byKey, {})
console.log(newArr);

// How
function byKey(acc, cur) {
    if(acc[cur.key] !== undefined) { //If key is in
        if(Array.isArray(acc[cur.key])) { //Is it an array?
            acc[cur.key].push(cur.value); //push
        }
        else {
            let temp = acc[cur.key]; //Make a new array
            acc[cur.key] = [temp, cur.value]; //Add new values
        }
    } 
    else { //Key isn't in (whew!)
        acc[cur.key] = cur.value; //Just add the value
    }
    return acc;
}