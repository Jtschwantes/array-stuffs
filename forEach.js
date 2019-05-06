/*
*  (  What does it do?  ) 1. Applies a function to each element in an array.
*  (  Does it edit it?  ) 2. No.
*  (What does it return?) 3. Nothing.
*  (How can we use this?) 4. We can use a forEach to change information from
* JSON to normal english
*/

let books = [{
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
},
{
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
},
{
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

books.forEach(value => console.log(`"${value.title}"\
 is a ${value.genre} book that was written by\
 ${value.authorFirstName} ${value.authorLastName}.`));
