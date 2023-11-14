function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    if (showResult) {
        console.log(phrase + n1 + n2)
    } else {
        return n1 + n2;
    }
}

let number1 = 5; // 5.0
let number2 = 2.8;
let printResult = true;
let resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);

enum Role {ADMIN, READ_ONLY, AUTHOR}

const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sport', 'Cooking'],
    role: Role.ADMIN
}


if (person.role === Role.AUTHOR) {
    console.log(person.role);
}

function combine(input1: number | string, input2: number | string, resultConversion: string) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    if (resultConversion === 'as-number') {
        return +result;
    } else {
        return result.toString();
    }
}

const combinedAge = combine(30, 26, 'as-number');

console.log(combinedAge);

const combinedStringAge = combine('30', '26', 'as-number');

console.log(combinedStringAge);

const combinedName = combine("Max", "Anna", 'as-text');

console.log(combinedName);
