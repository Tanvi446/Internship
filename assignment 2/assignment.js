
// Q1. Display even numbers from 1 to 100
console.log("Q1. Even numbers from 1 to 100");

for (let i=2; i<=100; i=i+2){
    console.log(i);
}

// Q2. Calculator using Function and Switch
function calculate(num1, num2, operation) {

    switch (operation) {

        case '+':
            return num1 + num2;

        case '-':
            return num1 - num2;

        case '*':
            return num1 * num2;

        case '/':
            if (num2 === 0) {
                return "Division by zero is not allowed";
            }
            return num1 / num2;

        default:
            return "Invalid Operation";
    }
}

console.log("\nQ2. Calculator:");

console.log("10 + 5 =", calculate(10, 5, '+'));
console.log("10 - 5 =", calculate(10, 5, '-'));
console.log("10 * 5 =", calculate(10, 5, '*'));
console.log("10 / 5 =", calculate(10, 5, '/'));


// Q3. Find Tax using Switch Statement
function findTax(salary) {

    let tax;

    switch (true) {

        case (salary > 0 && salary <= 500000):
            tax = 0;
            break;

        case (salary > 500000 && salary <= 1000000):
            tax = salary * 0.10;
            break;

        case (salary > 1000000 && salary <= 1500000):
            tax = salary * 0.20;
            break;

        case (salary > 1500000):
            tax = salary * 0.30;
            break;

        default:
            return "Invalid Salary";
    }

    return tax;
}

console.log("\nQ3. Tax Calculation:");

console.log("Salary = 450000, Tax =", findTax(450000));
console.log("Salary = 800000, Tax =", findTax(800000));
console.log("Salary = 1200000, Tax =", findTax(1200000));
console.log("Salary = 2000000, Tax =", findTax(2000000));


// Q4. Sum of Products of Corresponding Digits
function sumOfProducts(n1, n2) {

    let sum = 0;

    while (n1 > 0 || n2 > 0) {

        let digit1 = n1 % 10;
        let digit2 = n2 % 10;

        sum += digit1 * digit2;

        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
    }

    return sum;
}

console.log("\nQ4. Sum of Products of Corresponding Digits:");

console.log("n1 = 6, n2 = 34");
console.log("Result =", sumOfProducts(6, 34));

console.log("\nn1 = 123, n2 = 456");
console.log("Result =", sumOfProducts(123, 456));