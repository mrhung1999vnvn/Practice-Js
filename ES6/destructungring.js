//With object
const withOJ=(()=>{
    const object={
        name:"Hung",
        age:"18",
        job:"President"
    };
    //Destructuring in here
    const {age:AgeofHung}=object;
    console.log(AgeofHung);
})()

//With Array
const withArr= (()=>{
    const arr=[1,2,3,4];
    var [a,b]=arr;
    //Return 1 2
    [a,b]=[b,a];
    //Return 2 1
    console.log(a,b);
})();


//With Rest operator
const withRest=(()=>{
    const [a,b,...arr]=[1,2,3,4,5,6,7];
    console.log(a,b,arr);
})();