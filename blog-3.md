
## Important of type guard:

Type guards in typeScript is important because it provide type safety in the code.While creating enterprise level projects its important the safety of the code because unnecessary small error can cause big problem in that project.The typeScript provide static type of data to the Javascript.And it is important to narrow down the types while working in the complex project that use structure like union or any other types.Type guard help typeScript to understand what type a certain value has at a particular point in the code.Thats the reason the code became safe and its help to catch the unnecessary type related error at compile time.

There are various type of type guard.
Here are the example:

**1. typeof:**
Type guard is used to identify if the following data or variable is primitive type  like string, or number.

example:

if (typeof value === "string){
    console.log('this value is string')
}


2. instanceof:
The instanceof is used to know if the object is an instance of a particular class or function

example:
if(value instanceof NewClass){
    console.log('this value is instance of NewClass')
}
