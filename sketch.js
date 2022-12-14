// Create a new p5.js sketch
function setup() {
    // Set the size of the canvas
    createCanvas(400, 400);
}

function draw() {
    // Clear the canvas
    clear();

    // Set the fill color for the numbers
    fill(0);

    // Set the font size for the numbers
    textSize(32);

    // Draw the numbers in a grid
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            // Calculate the x and y position of the number
            let posX = x * 100 + 50;
            let posY = y * 100 + 75;

            // Draw the number at the calculated position
            text(x + y + 1, posX, posY);
        }
    }
}

// When the user clicks the mouse, redraw the grid of numbers
function mouseClicked() {
    redraw();
}