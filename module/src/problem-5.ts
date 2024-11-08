{
//====================== problem 5==================//

type Property = {
    name:string;
    age:number;
}

const getProperty = <Y extends keyof Property> (obj:Property, Key:Y) =>{
    return obj[Key]
}

const person1 = { name: "Alice", age: 30 };
// console.log(getProperty(person1, "name"));




}