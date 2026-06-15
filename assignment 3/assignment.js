// Q1. Remove states starting with vowels

const states = [
    "Andhra Pradesh",
    "Uttar Pradesh",
    "Odisha",
    "Assam",
    "Maharashtra",
    "Gujarat",
    "Karnataka",
    "Tamil Nadu",
    "Rajasthan"
];

const filteredStates = states.filter(
    state => !['A', 'E', 'I', 'O', 'U'].includes(state[0].toUpperCase())
);

console.log("Q1:", filteredStates);

// Q2. Reverse words in string

let str = "I love my India";

let reversedSentence = str.split(" ").reverse().join(" ");

console.log("Q2:", reversedSentence);

// Q3. INDIA -> INDONESIA using splice

let arr = "INDIA".split("");

arr.splice(3, 0, "O", "N", "E", "S");

console.log("Q3:", arr.join(""));

// Q4. Count vowels and consonants

let text = "JavaScript is a powerful programming language";

let vowels = 0;
let consonants = 0;

for (let char of text.toLowerCase()) {

    if (/[a-z]/.test(char)) {

        if ("aeiou".includes(char)) {
            vowels++;
        } else {
            consonants++;
        }
    }
}

console.log("Q4:");
console.log("Vowels =", vowels);
console.log("Consonants =", consonants);

// Q5. Replace wrong word with correct word

function correctfn(string, wrong, correct) {
    return string.replace(wrong, correct);
}

console.log(
    "Q5:",
    correctfn(
        "I live in Mombai",
        "Mombai",
        "Mumbai"
    )
);

// Q6. Numbers greater than 5 using filter

let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];

let answer = inputArr.filter(num => num > 5);

console.log("Q6:", answer);

// Q7. Average using map and reduce

const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] }
];

const result = students.map(student => {

    const total = student.scores.reduce(
        (sum, score) => sum + score,
        0
    );

    return {
        name: student.name,
        average: total / student.scores.length
    };
});

console.log("Q7:", result);

// Q8. Repeated sum of digits

function repeatedDigitSum(num) {

    while (num >= 10) {

        let sum = 0;

        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }

        num = sum;
    }

    return num;
}

console.log("Q8:", repeatedDigitSum(456));

// Q9. Count words in paragraph

function countWords(paragraph) {

    return paragraph.trim().split(/\s+/).length;
}

let paragraph =
    "JavaScript is one of the most popular programming languages in the world.";

console.log("Q9:", countWords(paragraph));

// Q10. Reverse a string

function reverseString(str) {

    return str.split("").reverse().join("");
}

console.log("Q10:", reverseString("Hello"));

// Q11. Find average marks using object methods

const studentData = {

    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },

    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },

    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
};

const averages = {};

for (let student in studentData) {

    const marks = Object.values(studentData[student]);

    const total = marks.reduce(
        (sum, mark) => sum + mark,
        0
    );

    averages[student] = {
        average: total / marks.length
    };
}

console.log("Q11:", averages);