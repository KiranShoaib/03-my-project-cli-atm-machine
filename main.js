#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 9870;
let pinAns = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your Pin Code",
        type: "number",
    },
]);
if (pinAns.pin === myPin) {
    console.log("Correct pin code");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["Cash Withdraw", "Check Balance", "Fast Cash"],
        },
    ]);
    if (operationAns.operation === "Cash Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            },
        ]);
        if (amountAns.amount < myBalance) {
            myBalance -= amountAns.amount;
            console.log(`Your remaining balance is ${myBalance}`);
        }
        else {
            console.log("Insufficient balance");
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your balance is ${myBalance}`);
    }
    else if (operationAns.operation === "Fast Cash") {
        let fastAns = await inquirer.prompt([
            {
                name: "fastcash",
                message: "How much money you want to withdraw?",
                type: "list",
                choices: ["1000", "2000", "5000", "10000"],
            },
        ]);
        if ((fastAns.fastcash === 1000, 2000, 5000, 10000)) {
            myBalance -= fastAns.fastcash;
            console.log(`You have withdrawal successfully ${fastAns.fastcash} \nYour remaining balance is ${myBalance} `);
        }
    }
}
else {
    console.log("Incorrect pin code");
}
