/*
*  (  What does it do?  ) 1. Adds any number of elements to an array.
*  (  Does it edit it?  ) 2. Yes.
*  (What does it return?) 3. The new length of the array.
*  (How can we use this?) 4. There could be a queue that is needed to service
* people who call the school for help on certain needs. 
*/

//example array of people who need to be serviced.
let serviceArray = [
{
    firstName: "Bob",
    lastName: "Bobson",
    email: "blahblahblah"
},
{
    firstName: "Fred",
    lastName: "Fredson",
    email: "blahblahblah"
},
{
    firstName: "Joe",
    lastName: "Joeson",
    email: "blahblahblah"
},
];
//One more for our example
let newCall = {
    firstName: "Brad",
    lastName: "Bradson",
    email: "blahblahblah"
};

//We should know how big the queue is to give estimated wait times.
let queueSize = serviceArray.length;

//Oh no! Someone else needs help! We need to update our queue.
queueSize = serviceArray.push(newCall);
//When someone is serviced you can shift to shrink the queue
let temp = serviceArray.shift();
//Tell them how great they are
sendThankEmail(temp);

console.log(serviceArray);


















































function sendThankEmail() {/*chillen*/}


