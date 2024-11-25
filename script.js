window.onload = function() {
    let count = localStorage.getItem('visitorCount');
    if (count) {
        count = parseInt(count) + 1; // Increment visitor count
    } else {
        count = 1; // First time visit
    }
    localStorage.setItem('visitorCount', count);
    document.getElementById('visitor-count').innerText = count;
};