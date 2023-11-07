
document.addEventListener('DOMContentLoaded', function () {
    const displayContainer = document.getElementById('display-api-data');
    
    // Parse the URL to retrieve the data parameter
    const urlParams = new URLSearchParams(window.location.search);
    const serializedData = urlParams.get('data');
    
    if (serializedData) {
        // Parse and display the API data
        const data = JSON.parse(decodeURIComponent(serializedData));
        displayContainer.textContent = JSON.stringify(data, null, 2);
    } else {
        displayContainer.textContent = 'No API data found.';
    }
});
