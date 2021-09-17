/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quote =[
  ["It does not do to dwell on dreams and forget to live.","-Albus Dumbledore", "Harry Potter and the Sorceret's Stone", "Chapter 12"],
  ["The ones that love us never really leave us. You can always find them in here.", "-Sirius Black","Harry Potter and the Prisoner of Azkaban."],
  ["Things we lose have a way of coming back to us int the end, if not always in the way we expect.", "-Luna Lovegood", "Harry Potter and the Order of the Phoenix."],
  ["Dobby had heard of your greatness, sir, but of your goodness, Dobby never knew.", "-Dobby","Harry Potter and the Chamber of Secrets."],
  ["Do not pity the dead, Harry. Pity the living . And above all, pity those who live without love.","-Albus Dumbledore","Harry Potter and Deathly Hallows."],
  ["We've all got both light and dark inside us. What matters is the part we choose to act on...that's who we really are.", "-Sirius Black", "Harry Potter and the Order of the Phoenix."],
  ["When in doubt, go to the library.","-Ron Weasley","Harry Potter and the Chamber of the Secrets.", "Chapter 14"],
  ["Don't let the muggles get you down.", "-Ron Weasley", "Harry Potter and the Prisoner of Azkaban.", "Chapter 1"],
  ["Until the very end.", "-James Potter", "Harry Potter and the Deathly Hallows."],
  ["Just because you have the emotional range of a teaspoon doesn't mean we all have.", "-Hermione Granger", "Harry Potter and the Order of the Phoenix", "Chapter 21"],
  ["You sort of start thinking anything's possible if you've got enough nerve.", "-Ginny Weasley", "Harry Potter and the Order of the Phoenix."],
  ["I love magic.", "-Harry Potter", " Harry Potter and the Goblet of Fire."],
];

/***
 * `getRandomQuote` function
***/
function getRandomQuote(quote) {
  return Math.floor(Math.random() * quote) +1
}
for (let i=0; i<12; i++){
  console.log(getRandomQuote)
}
/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);