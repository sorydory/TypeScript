//클래스 선언
class Person{
    //생성자!
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    //method정의
    speak(){
        console.log(`${this.name}:hello`);
    }
}
const min = new Person('min',29);
console.log(min);