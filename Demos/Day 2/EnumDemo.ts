enum NumericEnum{
    First,
    Second=12,
    Third
}
let myEnum:NumericEnum = 12;
console.log(myEnum);

console.log(NumericEnum);
console.log(NumericEnum.Second + " " + NumericEnum[12] +  " " + NumericEnum['Second']);



enum ComputedEnum{
    ONE,
    TWO=12,
    THREE=TWO * 4,
    FOUR=demoFunction()
}

function demoFunction(){
    return 66;
}

enum ComputedEnum1{
    ONE,
    FOUR,
    TWO=12,
    THREE=TWO * 4    
}

enum ComputedEnum2{
    TWO=12,
    THREE=TWO * 4,    
    ONE,
    FOUR    
}
console.log(ComputedEnum2.TWO + " " + ComputedEnum2.ONE);

enum StringEnum{
    AIR = 'All India Radio',
    JS = 'Java Script',
    MOUSE = 'Manually Operated User Seize',
    TS = 'TypeScript'
}

enum HetrogeneousEnum{
    ONE,
    RXJS = 'REactive JavaScript Expression',
    Redux = 'Reducer',
    NGRX = 'Angular Reducer'
}
