{
//=============== problem 8 ===================//

function validateKeys<T extends object>(obj:T, keys:(keyof T)[]) :boolean | void {
    const result = keys.every(key => key in obj);
    return result
  }
  
  const person2 = { name: "Alice", age: 25, email: "alice@example.com" };
  // console.log(validateKeys(person2, ["name", "age"]));


}