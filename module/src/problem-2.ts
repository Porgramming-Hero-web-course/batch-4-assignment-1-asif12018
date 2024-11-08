{

//============== problem 2 ========================//

const removeDuplicates = (arr:number[]):number[] | void =>{ 
    let primaryArray : number[] = []
    for(let i:number = 0; i < arr.length;i++){
      
        if(!primaryArray.find((e : number) : boolean => e === arr[i])){
            primaryArray.push(arr[i])
        }
        
    }

    return primaryArray

}

const result1 = removeDuplicates([1, 2, 2, 3, 4, 4, 5])
// console.log(result1)



}