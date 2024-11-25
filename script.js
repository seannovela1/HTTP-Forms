// 1. Write code to allow visitors of the page to customize it to their liking. There is a
// form on the page that accepts a name (to be used in a greeting when the user visits
// the page) and a color picker to allow the user to choose their preferred background
// color/foreground color combination. Write the necessary code to capture these values
// when the form is submitted (prevent the default action on the form submission button to
// achieve this) and store these values in localStorage (so that it persists on the user’s
// computer and their preferences are saved indefinitely). Next, write a function to apply
// the preferences if they have been set and call it each time the page loads. You may
// also want to call this function again when the user saves their preferences to
// immediately apply them. Make sure you also notify the user somehow that the preferences
// were saved.



// Function to apply the preferences saved in localStorage
function applyPreferences() {
    // Get the user's name, background color, and foreground color from localStorage
    const userName = localStorage.getItem('userName');
  const bgColor = localStorage.getItem('bgColor');
  const fgColor = localStorage.getItem('fgColor');

  // If the user has set a name, update the greeting
  if (userName) {
    // Set the text content of the element with id 'greeting' to show a personalized greeting
    document.getElementById('greeting').textContent = `Hello, ${userName}! Welcome back!`;
}


  // If both background and foreground colors are set, apply them to the page
  if (bgColor && fgColor) {  // Apply the background color to the body
    document.body.style.backgroundColor = bgColor;
    // Apply the foreground (text) color to the body
    document.body.style.color = fgColor;
  }
} 

// Function to save the preferences from the form
function savePreferences(event) { 