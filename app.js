//Setting Up a global Variable of recived Quotes form API
let apiQuotes = []


//Show New Quote
const newQuote =()=>{
    //Pick a tandom quote from apiQuote Array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    console.log(quote);
    return quote;
}
//Show Quote from Local if api failed
const localQuote =()=>{
    const quote = localQuoteArr[Math.floor(Math.random() * localQuoteArr.length)]
    console.log(quote);
    return quote;
}
// Get Quotes From API 
const getQuote = async() =>{
    const apiUrl = 'https://type.fit/api/quotes'
    try {
        const response = await fetch(apiUrl)
        apiQuotes = await response.json() //Setting apiQuotes values to response and convert response string to json object
        newQuote(); //Calling a single quote
    } catch (error) {
        //Catch Error Here
        localQuote() //If API got some erro local quote function will be call
    }
}

//Onload
getQuote()