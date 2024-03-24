#! /usr/bin/env node

 import inquirer from "inquirer";
 type ansType = {
    userGuess : number
 }

 const systemGeneratedNumber = Math.floor( Math.random()*10);

 const answers : ansType = await inquirer.prompt(
    [
        {
            type : "number",
            name : "userGuess",
            message : "write your guess b/w 1 to 10: "
        }
    ]
 )

 const {userGuess} = answers;
console.log(userGuess , "userGuess",systemGeneratedNumber,"systemGeneratedNumber")
 if(userGuess === systemGeneratedNumber){
    console.log("yayyy Your answer is correct \n You win!")
 }else {
    console.log("Please try again Better Luck next time!")
 }