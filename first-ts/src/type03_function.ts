let myFunction: (arg1: number, arg2:number) => number;
myFunction = function(x,y){
    return x+y;
}
let num:number = myFunction(10,20);
console.log(num);

function myFunction2(x:number,y:number):number{
    return x+y;
    //return 꼭 해야한다!
}
function myFunction3() :void{
    console.log("hi");
}
let myFunction4: () => void;
myFunction4 = function(){
    console.log("hi");
}

//interface 
interface Add {
    (num1:number, num2:number):number;
}

let myFunction5: Add = function(num1,num2){
    return num1 + num2
}

//함수 옵셔널 ?????

//매개변수가 여러개일 때 선택적 매개변수가 뒤로가야함
//앞에 있으면 에러발생
function printUser(name:string, age?:number){
    return `Hello ${name} age ${age}`;
}
printUser("green");

//함수 옵셔널 매개변수
function showName(name?:string){
    return `Hello ${name} || 'aaa'`;
}
function showName2(name="aaa"){
    return `Hello ${name}`
}
showName("green");
showName();
showName2("green");
showName2();

//함수 나머지 매개변수
function addArr(...nums:number[]){
    console.log(nums);
}
addArr(1,2,3);
addArr(1,2,3,4,5,6,7,8)

//함수에서의 this 타입 지정
interface User2 {
    name:string
}
let yellow: User2 = {
    name:"yellow"
}
function printUserName(this:User2){
    console.log(this.name);
}
const myFun = printUserName.bind(yellow);
myFun();
function printUserName2(this:User2, age:number){
    console.log(age, this.name);
}
const myFun2 = printUserName2.bind(yellow);
//전달된 값 30은 this다음 매개변수에 전달됨
myFun2(30);

//함수 오버로드
interface Person{
    name:string;
    age:number;
}
function join(name:string,age:string):string;
function join(name:string,age:number):Person;
function join(name:string, age:number|string):Person|string{
    if(typeof age === "number"){
        return{
            name:name,
            age:age
        }
    }else{
        return "나이는 숫자로 입력하세요";
    }
}
const green2:Person = join("green",30);
const blue:string = join("blue","hi");
