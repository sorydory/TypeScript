class ClassAnimal{
    private name:string;
    //정적 멤버 변수 선언
    //this나 인스턴스 접근할 수 없음 클래스명.변수명 으로 접근해야함
    static eye = 2;
    constructor(name:string){
        this.name = name;
    }
    //???????????????

    //정적 메소드 클래스명,메소드명
    static eat():void{
        console.log("먹는다");
    }
}
class ClassCat extends ClassAnimal{
    public getName() : string{
        this.sound()
        return `Cat name is ${this.name}`; 
    }
    private sound():void{
        console.log('야옹~!');
    }
}
let cat = new ClassCat("레오");
console.log(cat.getName());
console.log(ClassAnimal.eye);
ClassAnimal.eat();

//추상 클래스 선언 abstract
//상속
//인스턴스 생성할 수 없음!
abstract class Person {
    name:string;
    constructor(name:string){
        this.name=name;
    }
    //추상메소드는 선언부만 있음
    abstract work():void;
}
class Teacher extends Person {
    work(): void {
        console.log("가르칩니다.");
    }
}
class Engineer extends Person {
    work(): void{
        console.log("엔지니어 입니다.")
    }
}
// let person1 = new Person("호호");
let teacher1 = new Teacher("bella");
teacher1.work();
let engineer1 = new Engineer("lora");
engineer1.work();