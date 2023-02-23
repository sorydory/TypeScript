enum Week {
    Sun,
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat
}
enum Color{
    Red='red',
    Green='green',
    Blue='blue'
}
console.log(Week[0]);
console.log(Week[1]);
console.log(Color.Red);
console.log(Color['Green']);

let aaa:Color = Color.Red;

enum StarbucksGrade{
    WELCOME,
    GREEN,
    GOLD
}
function getDicount(v: StarbucksGrade) :number{
    switch(v){
        case StarbucksGrade.WELCOME:
            return 0;
        case StarbucksGrade.GREEN:
            return 5;
        case StarbucksGrade.GOLD:
            return 10;
    }
}
console.log(getDicount(StarbucksGrade.GREEN));