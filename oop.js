class User{
    constructor(id,firstname,lastname){
        this.id=id;
        this.firstname=firstname;
        this.lastname=lastname;
    }
    introduce(){
        console.log("ben"+this.firstname+' '+this.lastname+".");
    }
}

let user =new User(1,"ahmet","çelik");
user.introduce();

class Teacher extends User(){
    introduce(){
        let text =super.introduce();// Ana class daki introduce methodunu kullandırtan yapı superdir.Bunu kullanarak override etmiş olduk
        console.log(text);
        console.log("ben"+this.firstname+' '+this.lastname+"ben bir öğretmenim");
    }
}
class Student extends User(){
    constructor(id,firstname,lastname){
        super(id,firstname,lastname);
        this.courses=[];
    }
    introduce(){
        console.log("ben"+this.firstname+' '+this.lastname+"ben bir öğrenciyim");
    }
}

let teacher = new Teacher(1,"nadir","javed");
teacher.introduce();

let student = new Student(2,"lucas","bartram");
let course =student.courses=["Matematik","Coğrafya"];
console.log("course info",course);
