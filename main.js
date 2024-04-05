#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 1111;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "Please enter your pin number",
    type: "number"
});
if (pinAnswer.pin === myPin) {
    console.log("Correct pin number!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option of your choice to perform operation",
            type: "list",
            choices: ["withdraw", "check balance", "deposit", "recent transactions"]
        }
    ]);
    // FOR WITHDRAW 
    if (operationAns.operation === "withdraw") {
        let withAmountAns = await inquirer.prompt([
            {
                name: "amountWithdraw",
                message: "Enter your amount for withdraw",
                type: "number"
            }
        ]);
        if (withAmountAns.amountWithdraw <= myBalance) {
            console.log(withAmountAns.amountWithdraw + " successfully withdrawn");
            myBalance -= withAmountAns.amountWithdraw;
            console.log("Your remaining balance is: " + myBalance);
        }
        else {
            console.log("Not enough cash in your account");
        }
    }
    // FOR CHECK-BALANCE
    else if (operationAns.operation === "check balance") {
        console.log("Your current balance is: " + myBalance);
    }
    // FOR DEPOSIT
    else if (operationAns.operation === "deposit") {
        let depAmountAns = await inquirer.prompt([
            {
                name: "amountDeposit",
                message: "Enter your amount for deposit",
                type: "number"
            }
        ]);
        if (depAmountAns.amountDeposit > 0) {
            console.log(depAmountAns.amountDeposit + " successfully deposited");
            myBalance += depAmountAns.amountDeposit;
            console.log("Your new balance is: " + myBalance);
        }
        else {
            console.log("Enter valid amount");
        }
    }
    // FOR RECENT-TRANSACTIONS
    else if (operationAns.operation === "recent transactions") {
        console.log("No recent transactions till now");
    }
}
else {
    console.log("Incorrect pin number!!!");
}
