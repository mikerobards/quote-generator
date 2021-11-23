const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const quoteBtn = document.getElementById("new-quote");

let quotes = [];

// Display new quote
function newQuote() {
    // Pick random quote from array
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(quote);
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }

    quoteText.textContent = quote.text;
}

// Display local quotes
function newLocalQuote() {
    // Pick random quote from array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    console.log(quote);
}

// Get quotes from API
async function getQuotes() {
    const url = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(url);
        quotes = await response.json();
        // console.log(quotes[12]);
        newQuote();
    } catch (error) {
        // Catch error here
        console.log(error)
        newLocalQuote();
    }
}

// Tweet quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event listeners
quoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
getQuotes();


// https://twitter.com/intent/tweet