{
//================= problem 3=========================//


const countWordOccurrences = (sentence:string, word: string) : number | void =>{

    let primaryCount = 0;
    const spitedSentence = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLocaleLowerCase().split(' ');
    for(let i : number = 0; i < spitedSentence.length; i++){
        if(spitedSentence[i] === word){
            primaryCount = primaryCount + 1;
        }
    }



    return primaryCount

}

const result2 = countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript")
// console.log(result2)




}