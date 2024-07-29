// Wait for the DOM content to be loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select the color box and button elements
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');

    // Function to generate a random color in hexadecimal format
    function getRandomColor() {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        return randomColor; // Return the generated random color
    }

    // Add an event listener to the button
    changeColorBtn.addEventListener('click', () => {
        // Change the background color of the color box to a random color
        colorBox.style.backgroundColor = getRandomColor();
    });
});
