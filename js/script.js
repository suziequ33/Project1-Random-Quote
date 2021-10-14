/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat
/**I  got the colors from the website html-color.codes
 * the colors are red, green, blue and yellow for the houses in Harry Potter. 
 **/

const colors =[
  {houseColors: "#ac100a"},   //gryffindor red
  {houseColors: "#0a7521"},   //slytherin  green
  {houseColors: "#15027e"},   //ravenclaw  blue
  {houseColors: "#eef10b"},   //hufflpuff  yellow
];

/** I used the same formula of the random number method for the colors.
 * 
 */
function getRandomColor(){
  let randomColor = Math.floor(Math.random() * colors.length);
  return colors[randomColor];
}

  
/*** 
 * `quotes` array 
***/
/**  array of objects quotes: Harry Pottr quotes with a source, citation, and chapter. 
 **/

const quotes =[
  {quote:"It does not do to dwell on dreams and forget to live.", source:"-Albus Dumbledore", citation:"Harry Potter and the Sorceret's Stone", chapter:"Chapter 12"},
  {quote:"The ones that love us never really leave us. You can always find them in here.", source:"-Sirius Black", citation:"Harry Potter and the Prisoner of Azkaban."},
  {quote:"Things we lose have a way of coming back to us in the end, if not always in the way we expect.", source: "-Luna Lovegood", citation:"Harry Potter and the Order of the Phoenix."},
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
/**getRandomQuote function to make the quotes random. Used Math.floor(Math.random())
 * also used (quotes.length) for the length of the array instead of *12 +1)
 * returns quotes from randomNumber
 */
function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * (quotes.length));
  return quotes[randomNumber];
}

/***
 * `printQuote` function
***/
/** printQuote function used <p></p> tags for the quote and source but had to add if statements
 * for the citation and the chaper in <span class></span class>.
 *  storeRandomQ refers to the getRandomQuote fot the results.
 *  Used template literals for a more of a concatenated code.
 * html += (adding the quote, source to citation and chapeter) add html to the closeing </p> tag.
 */
/** added Harry potter colors to the function. added a variable for the colors and referred it to getRandomColor */
function printQuote() {
  let storeColors = getRandomColor();
  let storeRandomQ = getRandomQuote();
 let html =`
  <p class="quote">${storeRandomQ.quote}</p>
  <p class="source">${storeRandomQ.source}`;
  if (storeRandomQ["citation"]){
    html += `<span class="citation"> ${storeRandomQ["citation"]}</span>`;
  }
  if (storeRandomQ["chapter"]){
    html += `<span class="chapter"> ${storeRandomQ["chapter"]}</span>`;
  }
  html += '</p>';

document.getElementById("quote-box").innerHTML = html;
document.body.style.background = storeColors.houseColors;
}
/**document.body links the background to the index.html.and the style.css togethre.**/
/**document.getElementById links innerHTML and the html string to index.html 
 * and displays it ong the site.
 * = html is my code to the function printQuote */ 
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false) ;

/**document.getElementById add the button to the site and make it pring the quotes */