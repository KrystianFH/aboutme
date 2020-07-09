'use strict';

// Plan: function declaration, 
// copy each question into the function between the curly brackets
// invoke the function
// repeat for all remaining questions

// Q1 opening wrap  

function nameQuestion(){
  var usernameAnswer = prompt('Why hello Human, what are you called?');
  // console.log('usernameAnswer : ' + usernameAnswer);
  
  alert('Really?!?! How odd. Well I suppose I will call you ' + usernameAnswer + ' too.');
}
nameQuestion();

//Q2 

function ageGuessQuestion(){
  var ageGuessAnswer = prompt('Is Krystian OLDER than 28 years of age (y/n)?');
  // console.log('ageGuessAnswer : ' + ageGuessAnswer);

  if (ageGuessAnswer.toLowerCase() === 'y'){
    alert('Ding Dong! You got it right!');
  } else {
    alert('Flattery will get you nowhere ' + usernameAnswer + '. WRONG!');
  }
}
ageGuessQuestion();
//Q2 Ends

// Q3

function loveAnimalsQuestion(){
  var likeAnimalsAnswer = prompt('Does Krystian love animals (y/n)?');
  // console.log('likeAnimalsAnswer : ' + likeAnimalsAnswer);

  if (likeAnimalsAnswer.toLowerCase() === 'y'){
    alert('You are one smart cookie, as your kind often says. Such an odd phrase.');
  } else {
    alert('Poppycock! You do not know Krystian very well at all, do you ' + usernameAnswer + '?');
  }
}
loveAnimalsQuestion();

//Q3 End

//Q4

function shortyQuestion(){

  var shortyAnswer = prompt('Is Krystian what you humans think of as "tall" (y/n)?');
  // console.log('shortyAnswer : ' + shortyAnswer);

  if (shortyAnswer.toLowerCase() === 'y'){
    alert('You sure blew that one.');
  } else if(shortyAnswer.toLowerCase() === 'n'){
    alert('She will never admit it, but does she really have to?');
  } else {
    alert('I shake my fist at you! That was never an option human.');
  }
}
shortyQuestion();

//Q4 Ends

//Q5

function foodieQuestion(){
  var foodieAnswer = prompt('Is Krystian a foodie (y/n)?');
  // console.log('foodieAnswer : ' + foodieAnswer);

  if (foodieAnswer.toLowerCase() === 'y'){
    alert('Maybe you truly do know Krystian.');
  } else {
    alert('Do you enjoy making me angry human? Everyone loves food that was a giveaway.');
  }
}
foodieQuestion();

//Q5 Ends

// Q6

function howManyPetsLoop(){

  // Question 6 w loop
  for(var i=0; i<=3; i++){
    // Q6 startContent
    var howManyPetsAnswer = prompt('How many pets does Krystian live with?');
    console.log('howManyPetsAnswer : ' +howManyPetsAnswer);

    var threePets = '3';

    if (howManyPetsAnswer > threePets){
      alert('You are aiming a bit too high my friend. Try Again :)');
    } else if(howManyPetsAnswer < threePets){
      alert('Add some more pets to the mix, you are coming up short my friend. Try Again :)');
    } else if(howManyPetsAnswer === threePets){
      alert('Have you met the wildlings or are you just great at guessing? Three was the right choice!');
      break;
    } else {
      alert('All it took was a simple guess pal. Try again.');
    }
    // Q6 endContent
  }
// Q6 end w loop
}
howManyPetsLoop();

//Q6 Ends

//Q7

function animalTypeLoop(){

  // Question 7
  // Q. 7 Loop start
  for (var answerIndex=0; answerIndex<6; answerIndex++){
  // Q. 7 Function Start
    var animalTypeArray = ['dog', 'cat', 'horse', 'bird', 'fish'];

    var likedAnimalsAnswer = prompt('What type of animals does Krystian like? ');

    if (likedAnimalsAnswer === animalTypeArray[0] || likedAnimalsAnswer === animalTypeArray[1] || likedAnimalsAnswer === animalTypeArray[2]){
    //  console.log('Correctamundo');
      alert('You are absolutely correct!');
      break;
    } else {
      alert('Sorry! Wrong answer pal.');
    }
    //Q.7 Content ends
  }
  //Q.7 end with loop
}
animalTypeLoop();

//Q7 Ends

// Q8

function introvertQuestion(){

  var introvertAnswer = prompt('Last question ' + usernameAnswer + '. Anyone who knows Krystian will know this one. Is Krystian an introvert (y/n)?');
  // console.log('introvertAnswer : ' + introvertAnswer);

  if (introvertAnswer.toLowerCase() === 'y'){
    alert('You have proven yourself ' + usernameAnswer + '. Proceed to learn more.');
  } else {
    alert('You might need to get to know Krystian a little better ' + usernameAnswer + '. Luckily for you she guessed you might need some help. Go on to her site and learn a thing or two.');
  }
}
introvertQuestion();

//Q8 Ends