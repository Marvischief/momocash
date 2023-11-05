

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');

searchInput.addEventListener('input', () => {
  // Perform search as the user types
  const query = searchInput.value;
  // Call a search function and update search results
  updateSearchResults(query);
});

searchButton.addEventListener('click', () => {
  // Perform search when the user clicks the search button
  const query = searchInput.value;
  // Call a search function and update search results
  updateSearchResults(query);
});

function updateSearchResults(query) {
  // Implement your search logic here (e.g., fetch data from a server)
  // Update the search results in the 'search-results' element
  // Display the 'search-results' element
  searchResults.style.display = 'block';
}

function updateSearchResults(query) {
    // Assuming you have an array of search data
    const searchData = ['Result 1', 'Result 2', 'Result 3', 'Result 4'];
    const filteredResults = searchData.filter(result => result.includes(query));
  
    // Clear previous search results
    searchResults.innerHTML = '';
  
    if (filteredResults.length > 0) {
      filteredResults.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.textContent = result;
        searchResults.appendChild(resultItem);
      });
    } else {
      searchResults.textContent = 'No results found';
    }
  
    // Display the 'search-results' element
    searchResults.style.display = 'block';
  }

  





// user logic for adding points //
// Initialize user points
let userPoints = 0;

// Function to update and display user points
function updatePoints() {
  const pointsDisplay = document.getElementById('points-display'); // Assuming you have an HTML element for displaying points
  pointsDisplay.textContent = `${userPoints}`;
  pointsDisplay.style.fontSize = '20px';
}

// Function to reward points for different activities
function rewardPoints(activity) {
  let pointsEarned = 0;

  // Define the points to be awarded for each activity
  switch (activity) {
    case 'playAd':
      pointsEarned = 5; // Reward 5 points for playing an ad
      break;
    case 'readArticle':
      pointsEarned = 10; // Reward 10 points for reading an article
      break;
    case 'playGame':
      pointsEarned = 20; // Reward 20 points for playing a game
      break;
    // Add more activities and point values as needed
  }

  // Update user points
  userPoints += pointsEarned;

  // Display updated points
  updatePoints();
}

// Function to reward points for time spent on the game
function rewardPointsForGameTime() {
    if (isGameRunning) {
      userPoints += 1; // Reward 1 point for every 5 minutes (adjust as needed)
      updatePoints();
    }
  }
  
  // Start the game and timer
  function startGame() {
    if (!isGameRunning) {
      isGameRunning = true;
      gameTimer = setInterval(rewardPointsForGameTime, 300000); // 300000 ms = 5 minutes
    }
  }
  
  // Stop the game and timer
  function stopGame() {
    if (isGameRunning) {
      isGameRunning = false;
      clearInterval(gameTimer);
    }
  }
  
  // Example: Trigger 'startGame' when the user starts playing the game
  document.getElementById('startGameButton').addEventListener('click', () => {
    startGame();
  });
  
  // Example: Trigger 'stopGame' when the user stops playing the game
  document.getElementById('stopGameButton').addEventListener('click', () => {
    stopGame();
  });

// Example usage:
rewardPoints('playAd'); // Reward points for playing an ad
rewardPoints('readArticle'); // Reward points for reading an article
rewardPoints('playGame'); // Reward points for playing a game
