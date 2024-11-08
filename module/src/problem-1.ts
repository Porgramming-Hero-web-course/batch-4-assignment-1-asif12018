{

//=========problem 1===========================//

const sumArray = (arr:number[]) : number  =>{
    const result = arr.reduce((add : number,current : number) : number=> add + current,0)
    return result
}

const result = sumArray([1, 2, 3, 4, 5]);
// console.log(result);


}