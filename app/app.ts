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

enum Role  {ADMIN, READ_ONLY,AUTHOR}

const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sport', 'Cooking'],
    role: Role.ADMIN
}


if (person.role === Role.AUTHOR) {
    console.log(person.role);
}
