function add(num1,num2) {
    
    // if (num2==undefined) {
    //     num2=0;
    // }

    //num2= num2 ||0; the given number or 0
    num2=num2||20
    return num1+num2;
    
}
const total=add(15);
console.log(total);
console.log(add(22,33));


//es6

function add1(num1,num2=90) {
    
    
    return num1+num2;
    
}
const total1=add1(15);
console.log(total1);
console.log(add1(22,33));