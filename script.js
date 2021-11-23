let quotes = [];

// Display new quote
function newQuote() {
    // Pick random quote from array
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(quote);
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

// On Load
getQuotes();


