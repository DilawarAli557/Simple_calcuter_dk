import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter first number:", type: "number", name: 'firstnumber' },
    { message: 'enter second number', type: 'number', name: 'secondnumber' },
    {
        message: 'select one option for perform your work',
        type: 'list',
        name: "operator",
        choices: ['addition', 'substraction', 'multiplication', "division"]
    }
]);
if (answer.operator == 'addition') {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator == 'substraction') {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator == 'multiplication') {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log('please select this valid');
}
