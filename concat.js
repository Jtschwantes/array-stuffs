/*
*  (  What does it do?  ) 1. Merges any number of arrays or objects. Each
* parameter has it's references concatenated into a new shallow copy.
*  (  Does it edit it?  ) 2. No.
*  (What does it return?) 3. A shallow copy of the given parameters.
*  (How can we use this?) 4. Anytime you want to organize data in arrays
* and you have to merge two. My example would be an array that holds
* information for what books people use in a libray. An array could hold
* information for a certain section, and a new shipment would need to
* add on to the original information
*/

//example array of information on books
let isleB = [{
    authorFirstName: "Bob",
    authorLastName: "Bobson",
    title: "Who did it?",
    genre: "mystery"
},
{
    authorFirstName: "Fred",
    authorLastName: "Fredson",
    title: "The Mountain of Doom",
    genre: "fantasy"
},
{
    authorFirstName: "Joe",
    authorLastName: "Joeson",
    title: "The Awesome Cookbook",
    genre: "living"
}
];
//Two more for our example
let newBooks = [{
    authorFirstName: "James",
    authorLastName: "Talmage",
    title: "Jesus the Christ",
    genre: "religious"
},
{
    authorFirstName: "Multiple",
    authorLastName: "Authors",
    title: "The Book of Mormon",
    genre: "religious"
}
];
//Another two
let newBooks2 = [{
    authorFirstName: "JRR",
    authorLastName: "Tolkin",
    title: "The Lord of the Rings",
    genre: "fantasy"
},
{
    authorFirstName: "J K",
    authorLastName: "Rowling",
    title: "Harry Potter",
    genre: "fantasy"
}
];

//We got a new shipment! We need to add them to our collection
console.log(isleB.concat(newBooks, newBooks2));