/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


//array of quote objects.
let quotes = [
  {
    quote: 'You can’t connect the dots looking forward; you can only connect them looking backward. So you have to trust that the dots will somehow connect in your future.',
    source: 'Steve Jobs',
    citation: 'Stanford University',
    year: 2005
  },
  {
    quote: 'When something is important enough, you do it even if the odds are not in your favor.',
    source: 'Elon Musk'
  },
  {
    quote: 'Imagination will often carry us to worlds that never were. But without it we go nowhere.',
    source: 'Carl Sagan'
  },
  {
    quote: 'Don’t be afraid to give up the good to go for the great.',
    source: 'John D. Rockefeller'
  },
  {
    quote: 'We are what we repeatedly do. Excellence, then, is not an act, but a habit.',
    source: 'Will Durant'
  },
  {
    quote: 'If opportunity doesn’t knock, build a door.',
    source: 'Kurt Cobain'
  },
  {
    quote: 'The only difference between ordinary and extraordinary is that little extra.',
    source: 'Jimmy Johnson'
  },
  {
    quote: 'People say nothing is impossible, but I do nothing every day',
    source: 'A. A. Milne',
    tag: 'Humour'
  }
];




//function to get random quote from array of objects.
function getRandomQuote() {
  let random = Math.floor(Math.random() * quotes.length);
  return quotes[random];
}


//function that generates background colour to a random colour.
function getRandomColour() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let bgColour = `rgb(${r}, ${g}, ${b})`;

  
  document.body.style.background = bgColour;
}
//returns first element in the document with class="colour".
document.querySelector(".colour");



//function that generates random quote.
function printQuote() {
  let randomQuote = getRandomQuote();
  let html = `<p class="quote"> ${randomQuote.quote} </p>`;
  html += `<p class="source">' ${randomQuote.source}`;
  
  if (randomQuote.citation) {
    html += `<span class="citation"> ${randomQuote.citation} </span>`;
  }

  if (randomQuote.year) {
    html += `<span class="year"> ${randomQuote.year} </span>`;
  }

  if (randomQuote.tag) {
    html += `<span class="tag"> ${randomQuote.tag} </span>`;
  }

  html += `</p>`;
  
  document.getElementById("quote-box").innerHTML = html;
  getRandomColour();
  return html;
}


//Refreshes quotes and background colour at regular intervals.
setInterval(printQuote, 10000);



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById("load-quote").addEventListener("click", printQuote, false);