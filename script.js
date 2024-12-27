// Check if the visit count is already stored in localStorage
if (!localStorage.getItem('visitorCount')) {
  // If not, initialize the count to 1
  localStorage.setItem('visitorCount', 1);
} else {
  // If it exists, increment the count
  let currentCount = parseInt(localStorage.getItem('visitorCount'), 10);
  localStorage.setItem('visitorCount', currentCount + 1);
}

// Display the current visit count in the footer
document.getElementById('visitor-count').textContent = localStorage.getItem('visitorCount');