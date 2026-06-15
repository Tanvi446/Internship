// Q1. let, const, var and their scope

function scopeDemo() {

    var a = "I am var";
    let b = "I am let";
    const c = "I am const";

    console.log(a);
    console.log(b);
    console.log(c);
}

scopeDemo();

// Q2. Return second fruit

const fruits = [
    "Apple",
    "Banana",
    "Mango",
    "Orange",
    "Grapes"
];

function getSecondFruit(arr) {
    return arr[1];
}

console.log("Q2:", getSecondFruit(fruits));


// Q3. push() and pop()

function modifyArray(arr) {

    arr.push("New Element");

    arr.pop();

    return arr;
}

console.log(
    "Q3:",
    modifyArray(["A", "B", "C"])
);


// Q4. Square numbers using map()

const numbers1 = [1, 2, 3, 4, 5];

function squareNumbers(arr) {

    return arr.map(num => num * num);
}

console.log(
    "Q4:",
    squareNumbers(numbers1)
);


// Q5. Filter odd numbers

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8];

function getOddNumbers(arr) {

    return arr.filter(
        num => num % 2 !== 0
    );
}

console.log(
    "Q5:",
    getOddNumbers(numbers2)
);


// Q6. Person object and greeting

const person = {
    name: "Tanvi",
    age: 20,
    occupation: "Student"
};

function greetPerson(person) {

    console.log(
        `Hello! My name is ${person.name}. I am ${person.age} years old and work as a ${person.occupation}.`
    );
}

greetPerson(person);


// Q7. Area of rectangle

function rectangleArea(rectangle) {

    return rectangle.width *
           rectangle.height;
}

console.log(
    "Q7:",
    rectangleArea({
        width: 10,
        height: 5
    })
);


// Q8. Return object keys

function getObjectKeys(obj) {

    return Object.keys(obj);
}

console.log(
    "Q8:",
    getObjectKeys(person)
);


// Q9. Merge two objects

function mergeObjects(obj1, obj2) {

    return Object.assign({}, obj1, obj2);
}

const objA = {
    name: "Tanvi"
};

const objB = {
    age: 20
};

console.log(
    "Q9:",
    mergeObjects(objA, objB)
);


// Q10. Sum using reduce()

const numbers3 = [10, 20, 30, 40, 50];

function sumArray(arr) {

    return arr.reduce(
        (sum, num) => sum + num,
        0
    );
}

console.log(
    "Q10:",
    sumArray(numbers3)
);

