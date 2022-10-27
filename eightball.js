//Variables to determine whether to print name 
let username = '';
let userName;

//Question variables
userQuestion = 'Some question...';

//Number variables
let randomNumber = Math.floor(Math.random() * 8);

//Eightball string variables
let eightBall = '';

//Print greeting
userName ? console.log('Hello ${username}!') :
console.log('Hello!');

//Print question
console.log(userQuestion);

//Determine what the eight ball result will be
switch(randomNumber){
  case 0:
    eightBall = 'It is certain';
    breal;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}

//Print the result
console.log(eightBall);
