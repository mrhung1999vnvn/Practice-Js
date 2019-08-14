//Setup
var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"]
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"]
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"]
  }
];

function lookUpProfile(name, prop) {
  // Only change code below this line
    for(var i=0;i<contacts.length;i++)
    {
        if(contacts[i]['firstName']==name){
            //console.log('layer 1',contact);
            if(contacts[i][prop]){
                return contacts[i][prop];
            }
            else{
                return "No such property";
            }
        }
        //console.log(name+''+contacts[i]['firstName']);
    }
    return "No such contact";

//   for (var i = 0; i < contacts.length; i++) {
//     if (name == contacts[i]["firstName"] && contacts[i].prop) {
//       return contacts[i].prop;
//     } else if (name != contacts[i].firstName && contacts[i].prop) {
//       return "No such contact";
//     } else return "No such property";
//     //else if()
 // }
  // Only change code above this line
}

// Change these values to test your function
console.log(lookUpProfile("Bob", "number"));
