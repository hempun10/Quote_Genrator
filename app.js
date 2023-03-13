const quoteContainer = document.querySelector("#quote-container");
const quoteText = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#author");
const twitterBtn = document.querySelector("#twitter");
const newQuoteBtn = document.querySelector("#new-quote");

//Setting Up a global Variable of recived Quotes form API
let apiQuotes = [];

//Show New Quote
const newQuote = () => {
  //Pick a tandom quote from apiQuote Array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  //Check if author filled is blank and replace it with 'Unknown'
  if (!quote.author) {
    author.textContent = "UnkNown";
  } else {
    author.textContent = quote.author;
  }

  // Check the quote text length and add styling
  if (quote.text.length > 50) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;
  return quote;
};

//Show Quote from Local if api failed
const localQuote = () => {
  const quote = localQuoteArr[Math.floor(Math.random() * localQuoteArr.length)];
  //Check if author filled is blank and replace it with 'Unknown'
  if (!quote.author) {
    author.textContent = "UnkNown";
  } else {
    author.textContent = quote.author;
  }

  // Check the quote text length and add styling
  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;
  // console.log(quote);
  return quote;
};
// Get Quotes From API
const getQuote = async () => {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json(); //Setting apiQuotes values to response and convert response string to json object
    newQuote(); //Calling a single quote
  } catch (error) {
    //Catch Error Here
    localQuote(); //If API got some erro local quote function will be call
  }
};

//TweetQuote
const tweetQuote = () =>{
    const twitterURL = `https://twitter.com/intent/tweet?text=${quote.textContent} - ${author.textContent}`
    window.open(twitterURL,'_blank')
}

//Event listner
newQuoteBtn.addEventListener('click',()=>{
    try {
        newQuote()
    } catch (error) {
        localQuote()
    }
})
twitterBtn.addEventListener('click',tweetQuote)
//Onload
getQuote();
