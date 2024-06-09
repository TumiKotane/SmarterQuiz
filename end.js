// Get references to DOM elements
const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
// Retrieve the most recent score from local storage
const mostRecentScore = localStorage.getItem('mostRecentScore');

// Retrieve the high scores from local storage or initialize an empty array
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// Define the maximum number of high scores to keep
const MAX_HIGH_SCORES = 50;

// Display the most recent score
finalScore.innerText = mostRecentScore;

// Enable the save button only when the username input has a value
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

// Function to save the high score
saveHighScore = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Create a score object with the most recent score and username
    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    // Add the new score to the high scores list
    highScores.push(score);
    // Sort the high scores list in descending order
    highScores.sort((a, b) => b.score - a.score);
    // Keep only the top 50 scores
    highScores.splice(50);

    // Save the updated high scores list to local storage
    localStorage.setItem('highScores', JSON.stringify(highScores));
    // Redirect to the high scores page
    window.location.assign('highscores.html');
};
