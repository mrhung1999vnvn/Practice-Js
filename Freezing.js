"use strict";
const obj={
    "name":"FreeCodeCamp",
    "review":"AweSome"
}

Object.freeze(obj);     //Prevent change object
obj.name='bad';
console.log(obj);