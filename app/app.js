function add(n1, n2, showResult, phrase) {
    if (showResult) {
        console.log(phrase + n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5; // 5.0
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);
var person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sport', 'Cooking'],
    role: [2, 'author']
};
person.role = [1, 'User'];
person.role[1] = 'Author';
person.role.push('Admin');
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
for (var _b = 0, _c = person.role; _b < _c.length; _b++) {
    var item = _c[_b];
    console.log(item);
}
