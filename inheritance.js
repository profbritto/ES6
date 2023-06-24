class Parent{
    constructor(){
        this.fatherName="Schenanaerg ";
    }
}

class Child extends Parent{
    constructor(name){
        super(); //must.nahole error khabo
        this.name=name;

    }
    getFullName(){
        return this.name+this.fatherName;
    }
}

const baby=new Child("arnod ");
const baby2=new Child("Nilom");
const baby3=new Child("gOLAM");

console.log(baby.getFullName());
console.log(baby2);
