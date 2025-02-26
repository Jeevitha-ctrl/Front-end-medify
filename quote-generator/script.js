// Explanation: We are using the Quotable API to fetch random quotes dynamically.
// This API is chosen because:
// - It provides a large collection of quotes with author names.
// - It is free to use without an API key.
// - The JSON format makes it easy to extract and display quotes.

// Function to fetch a new random quote
async function fetchQuote() {
    try {
        const response = await fetch('https://api.quotable.io/quotes/random');

        console.log('Response status:', response.status);
        
        if (!response.ok) {
            throw new Error('Failed to fetch quote');
        }

        const data = await response.json();

        console.log(data)

        document.getElementById('quote').textContent = "${data.content}";
        document.getElementById('author').textContent = "~${data.author}~";
    } catch (error) {
        console.error('Error fetching quote:', error);

        document.getElementById('quote').textContent = 'Failed to load quote.';
        document.getElementById('author').textContent = '';
    }
}

fetchQuote();