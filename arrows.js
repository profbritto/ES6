// function doubleit( num){
//     return num*2;
// }

// const doubleit=function(num){
//     return num*2
// }
const doubleit =(x,y=2)=> x*y;
const give5=()=>5;
const result=doubleit(5);
const result2=give5();
const bishal=(x,y) =>{
    const sum=x+y;
    const diff=x-y;
    const result=sum*diff;
    return result;
}
console.log(result);
console.log(give5());
console.log(bishal(4,5));
