//class 1 example
class Students{
    constructor(sId,sName){
        this.id=sId;
        this.name=sName;
        this.school="A.k.school";
        
    }
}

const hello = new Students(15,"rasel");
const hello1 = new Students(10,"abul");
console.log(hello.id);


//class 2 example
class Child6 {
    constructor(name, dob) {
       this.name = name;
       this.dob = dob;
    }
    
    currentAge() {
       const age = (`${this.name} is ${2018 - this.dob} year old!`);
       console.log(age);
    }
 }
 const zawad6 = new Child6('Zawad Ahmed', 2017);
    console.log(zawad6.name);
    console.log(zawad6.dob);
    zawad6.currentAge();







