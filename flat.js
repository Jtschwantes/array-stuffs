/*
*  (  What does it do?  ) 1. It takes away the depth of nested arrays and
* also removes all empty elements in an array
*  (  Does it edit it?  ) 2. No
*  (What does it return?) 3. A new array
*  (How can we use this?) 4. It's really good for cleaning up
* arrays. Sometimes you put nested arrays and empty elements into an 
* array and flat will fix it up.
*/

//polyfill
if (!Array.prototype.flat) {
    Array.prototype.flat = function() {
      var depth = arguments[0];
      depth = depth === undefined ? 1 : Math.floor(depth);
      if (depth < 1) return Array.prototype.slice.call(this);
      return (function flat(arr, depth) {
        var len = arr.length >>> 0;
        var flattened = [];
        var i = 0;
        while (i < len) {
          if (i in arr) {
            var el = arr[i];
            if (Array.isArray(el) && depth > 0)
              flattened = flattened.concat(flat(el, depth - 1));
            else flattened.push(el);
          }
          i++;
        }
        return flattened;
      })(this, depth);
    };
  }
//Polyfill^^^^^^^^^//

let data = [
    [{
            name: 'joe',
            id: 29834
        },
        {
            name: 'fred',
            id: 98273
        }
    ]
]

let moreData = [
    ['steve', 30948],
    ['jord', 23476],
    [
        ['john', 09345],
        ['bob', 23345]
    ]
]

data.push(['fred', 23456]);
data.push(moreData);

//Here we can see all the data.
//Even though it's the same Name:ID format,
//It's messy
console.log(data);
console.log('    ^      OLD       ^        ^');

let magicFix = data.flat(3);

//Even though we didn't fix the object,
//One can still access in order and with ease
//All of our data.
console.log('   v       NEW       v        v');
console.log(magicFix);