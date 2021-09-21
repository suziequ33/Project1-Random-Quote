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
const quotes =[
  {quote:"It does not do to dwell on dreams and forget to live.", source:"-Albus Dumbledore", citation:"Harry Potter and the Sorceret's Stone", chapter:"Chapter 12"},
  {quote:"The ones that love us never really leave us. You can always find them in here.", source:"-Sirius Black", citation:"Harry Potter and the Prisoner of Azkaban."},
  {quote:"Things we lose have a way of coming back to us int the end, if not always in the way we expect.", source: "-Luna Lovegood", citation:"Harry Potter and the Order of the Phoenix."},
  {quote:"Dobby had heard of your greatness, sir, but of your goodness, Dobby never knew.",source:"-Dobby", citation:"Harry Potter and the Chamber of Secrets."},
  {quote:"Do not pity the dead, Harry. Pity the living . And above all, pity those who live without love.", source:"-Albus Dumbledore", citation:"Harry Potter and Deathly Hallows."},
  {quote:"We've all got both light and dark inside us. What matters is the part we choose to act on...that's who we really are.", source:"-Sirius Black",citation:"Harry Potter and the Order of the Phoenix."},
  {quote:"When in doubt, go to the library.", source:"-Ron Weasley",citation:"Harry Potter and the Chamber of the Secrets.", chapter:"Chapter 14"},
  {quote:"Don't let the muggles get you down.", source:"-Ron Weasley",citation:"Harry Potter and the Prisoner of Azkaban.", chapter: "Chapter 1"},
  {quote:"Until the very end.", source:"-James Potter", citation:"Harry Potter and the Deathly Hallows."},
  {quote:"Just because you have the emotional range of a teaspoon doesn't mean we all have.", source:"-Hermione Granger", citation:"Harry Potter and the Order of the Phoenix", chapter:"Chapter 21"},
  {quote:"You sort of start thinking anything's possible if you've got enough nerve.",source:"-Ginny Weasley", citation:"Harry Potter and the Order of the Phoenix."},
  {quote:"I love magic.", source:"-Harry Potter", citation:" Harry Potter and the Goblet of Fire."},
];
/***
 * `getRandomQuote` function
***/
function getRandomQuote(quotes) {
  const randomNumber= Math.floor(Math.random(quotes)*12 +1)

}
/***
 * `printQuote` function
***/
function 


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);