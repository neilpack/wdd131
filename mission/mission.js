// Dark & Light Mode
let themeSelector = document.querySelector('Select');
let logo = document.querySelector("img");
// Function to switch themes
function changeTheme() {
// check to see what the current value of our select is.
if (themeSelector.value === "dark") {
    // if the value is dark then:
    document.body.classList.add('dark');
    // change the source of the logo img to point to the white logo.
    logo.src = 'byui-logo_white.png'; }
else {
    document.body.classList.remove('dark');
    logo.src = 'byui-logo_blue.webp' }
}

// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);
