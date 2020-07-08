'use strict';

var usernameAnswer = prompt('Why hello Human, what are you called?');
// console.log('usernameAnswer : ' + usernameAnswer);

alert('Really?!?! How odd. Well I suppose I will call you ' + usernameAnswer + ' too.');

var ageGuessAnswer = prompt('Is Krystian OLDER than 28 years of age (y/n)?');
// console.log('ageGuessAnswer : ' + ageGuessAnswer);

if (ageGuessAnswer === 'y'){
  alert('Ding Dong! You got it right!');
} else {
  alert('Flattery will get you nowhere ' + usernameAnswer + '. WRONG!');
}

var likeAnimalsAnswer = prompt('Does Krystian love animals (y/n)?');
// console.log('likeAnimalsAnswer : ' + likeAnimalsAnswer);

if (likeAnimalsAnswer === 'y'){
  alert('You are one smart cookie, as your kind often says. Such an odd phrase.');
} else {
  alert('Poppycock! You do not know Krystian very well at all, do you ' + usernameAnswer + '?');
}

var shortyAnswer = prompt('Is Krystian what you humans think of as "tall"?');
// console.log('shortyAnswer : ' + shortyAnswer);

if (shortyAnswer === 'y'){
  alert('You sure blew that one.');
} else if(shortyAnswer === 'n'){
  alert('She will never admit it, but does she really have to?');
} else {
  alert('I shake my fist at you! That was never an option human.');
}

var foodieAnswer = prompt('Is Krystian a foodie (y/n)?');
// console.log('foodieAnswer : ' + foodieAnswer);

if (foodieAnswer === 'y'){
  alert('Maybe you truly do know Krystian.');
} else {
  alert('Do you enjoy making me angry human? Everyone loves food that was a giveaway.');
}

var introvertAnswer = prompt('Last question ' + usernameAnswer + '. Anyone who knows Krystian will know this one. Is Krystian an introvert?');
// console.log('introvertAnswer : ' + introvertAnswer);

if (introvertAnswer === 'y'){
  alert('You have proven yourself ' + usernameAnswer + '. Proceed to learn more.');
} else {
  alert('You might need to get to know Krystian a little better ' + usernameAnswer + '. Luckily for you she guessed you might need some help. Go on to her site and learn a thing or two.');
}