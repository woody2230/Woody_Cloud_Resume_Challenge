// Get the current count from local storage or start from 0
let visitCount = localStorage.getItem('visitCount') || 0;

// Increment the count and save it back to local storage
visitCount++;
localStorage.setItem('visitCount', visitCount);

// Display the count on the webpage
document.getElementById('visitor-count').innerText = visitCount;