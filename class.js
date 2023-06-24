class Student{
    constructor(sId,sname){
        this.id=sId;
        this.name=sname;
        this.school="dv school";
    }
}

const st1=new Student(255,"Naris");
const st2=new Student(987,"Faris");
console.log(st1);
console.log(st2);

console.log(st1.name,st2.id);