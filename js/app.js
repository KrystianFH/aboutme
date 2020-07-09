'use strict';

var usernameAnswer = prompt('Why hello Human, what are you called?');
// console.log('usernameAnswer : ' + usernameAnswer);

alert('Really?!?! How odd. Well I suppose I will call you ' + usernameAnswer + ' too.');

var ageGuessAnswer = prompt('Is Krystian OLDER than 28 years of age (y/n)?');
// console.log('ageGuessAnswer : ' + ageGuessAnswer);

if (ageGuessAnswer.toLowerCase() === 'y'){
  alert('Ding Dong! You got it right!');
} else {
  alert('Flattery will get you nowhere ' + usernameAnswer + '. WRONG!');
}

var likeAnimalsAnswer = prompt('Does Krystian love animals (y/n)?');
// console.log('likeAnimalsAnswer : ' + likeAnimalsAnswer);

if (likeAnimalsAnswer.toLowerCase() === 'y'){
  alert('You are one smart cookie, as your kind often says. Such an odd phrase.');
} else {
  alert('Poppycock! You do not know Krystian very well at all, do you ' + usernameAnswer + '?');
}

var shortyAnswer = prompt('Is Krystian what you humans think of as "tall" (y/n)?');
// console.log('shortyAnswer : ' + shortyAnswer);


if (shortyAnswer.toLowerCase() === 'y'){
  alert('You sure blew that one.');
} else if(shortyAnswer.toLowerCase() === 'n'){
  alert('She will never admit it, but does she really have to?');
} else {
  alert('I shake my fist at you! That was never an option human.');
}

var foodieAnswer = prompt('Is Krystian a foodie (y/n)?');
// console.log('foodieAnswer : ' + foodieAnswer);

if (foodieAnswer.toLowerCase() === 'y'){
  alert('Maybe you truly do know Krystian.');
} else {
  alert('Do you enjoy making me angry human? Everyone loves food that was a giveaway.');
}

// Question 6
var howManyPetsAnswer = prompt('How many pets does Krystian live with?');
console.log('howManyPetsAnswer : ' +howManyPetsAnswer);

var threePets = 3;
for(var i=0; i<=3; i++){

  if (howManyPetsAnswer > threePets){
    alert('You are aiming a bit too high my friend.');
  } else if(howManyPetsAnswer < threePets){
    alert('Add some more pets to the mix, you are coming up short my friend.');
  } else if(howManyPetsAnswer === threePets){
    alert('Have you met the wildlings or are you just great at guessing? Three was the right choice!');
  } else {
    alert('All it took was a simple guess pal. Try again.');
  }
}

 
// Question 7
// Q. 7 Loop start
for (var i=0; i<6; i++){
// Q. 7 Start
  var animalTypeArray = ['dog', 'cat', 'horse', 'bird', 'fish'];

  var likedAnimalsAnswer = prompt('What type of animals does Krystian like? ');

  if (likedAnimalsAnswer === animalTypeArray[0] || likedAnimalsAnswer === animalTypeArray[1] || likedAnimalsAnswer === animalTypeArray[2]){
  //  console.log('Correctamundo');
    alert('You are absolutely correct!');
    break;
  } else {
    alert('Sorry! Wrong answer pal.');
  }
  //Q.7 ends
}
//Q.7 end with loop


var introvertAnswer = prompt('Last question ' + usernameAnswer + '. Anyone who knows Krystian will know this one. Is Krystian an introvert (y/n)?');
// console.log('introvertAnswer : ' + introvertAnswer);

if (introvertAnswer.toLowerCase() === 'y'){
  alert('You have proven yourself ' + usernameAnswer + '. Proceed to learn more.');
} else {
  alert('You might need to get to know Krystian a little better ' + usernameAnswer + '. Luckily for you she guessed you might need some help. Go on to her site and learn a thing or two.');
}