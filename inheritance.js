class Parent {
    constructor(){
        this.fantherName= "aaaaaaa";
    }
}


class Child extends Parent{
    constructor(name){
        super()
       this.name = name;
    }
 }
 
 const hello = new Child("rahim");
 console.log(hello);