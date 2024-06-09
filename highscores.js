// Get reference to the high scores list element in the HTML
const highScoresList = document.getElementById("highScoresList");
// Retrieve high scores from local storage, or initialize an empty array if no scores exist
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// Update the high scores list in the HTML
highScoresList.innerHTML = highScores
  // Map each high score to an HTML list item element
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  // Join all list items into a single string and set it as the inner HTML of the highScoresList element
  .join("");

