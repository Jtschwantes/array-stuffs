// class Node {
//     ;
//     constructor(value){
//         this.value = value;
//     }

// }

class LL {
    constructor(value) {
        this.head = {
            value,
            next: null
        }
        this.length = 1;
    }
    insert(value) {
        this.value = value;

    }
    // getValue(node) {
    //     return node.value;
    // }
}

console.log(new LL(10));
