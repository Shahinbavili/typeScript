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

const person: {
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string]
} = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sport', 'Cooking'],
    role: [2, 'author']
}
person.role = [1, 'User'];

person.role[1] = 'Author';

person.role.push('Admin');

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby)
}

for (const item of person.role) {
    console.log(item);
}
