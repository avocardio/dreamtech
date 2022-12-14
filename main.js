let a = 0.8;
let b = 0.8;
let x = 900 * a;
let y = 600 * b;

let vocabulary = [        
    ["a  b  c   ", "k  l  m  n", "s  t  u  v"],
    ["d  e  f  g", "          ", "  [STOP]  "],
    ["   h  i  j", "o  p  q  r", "w  x  y  z"]
];

function setup() {
     // create a canvas that is 3x3 grid
    createCanvas(x, y);
    
    // set the background color to white
    background(255);
    
    // set the stroke color to black
    noStroke();
    
    // draw the 3x3 grid on the canvas
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (i != 1 || j != 1) { // check if the current grid is not the middle one
                fill(255);
                rect(i * (x/3), j * (y/3), (x/3), (y/3));
                textSize(16);
                fill(0);
                text(vocabulary[i][j], (i * (x/3) + 10) * 1.3, (j * (y/3) + 20) * 1.3);
            } else { // if the current grid is the middle one
                // Draw a black circle
                noFill();
                stroke(0);
                ellipse(x/2, y/2, 30, 30);  
                noStroke();

                // textSize(16)
                // ("SPACE", (i * (x/3) + 10) * 1.3, (j * (y/3) + 20) * 1.3);
            }
        }
    }

    // Draw lines to divide the canvas into 9 rectangles
    stroke(0);
    strokeWeight(1);
    line(x/3, 0, x/3, y);
    line((x/3) * 2, 0, (x/3) * 2, y);
    line(0, y/3, x, y/3);
    line(0, (y/3) * 2, x, (y/3) * 2);
}

function color_for_1_sec(rect_location) {
    // color the rectangle for 1 second with very light green
    noStroke();
    fill(0, 255, 0, 30);
    rect(rect_location[0], rect_location[1], (x/3), (y/3));
    noStroke();
    // Remove the rectangle after 1 second
    setTimeout(function() {
        noStroke();
        fill(255);
        rect(rect_location[0], rect_location[1], (x/3), (y/3));
        noStroke();
        textSize(16);
        fill(0);
        text(vocabulary[rect_location[0]/(x/3)][rect_location[1]/(y/3)], (rect_location[0] + 10) * 1.3, (rect_location[1] + 20) * 1.3);
    }, 100);
}

function draw() {
    stroke(0);
    strokeWeight(1);
    line(x/3, 0, x/3, y);
    line((x/3) * 2, 0, (x/3) * 2, y);
    line(0, y/3, x, y/3);
    line(0, (y/3) * 2, x, (y/3) * 2);
}

string = "";
hist = [];

function communication() {

    let last = hist[hist.length - 1];
    let second_last = hist[hist.length - 2];
    let third_last = hist[hist.length - 3];
    let fourth_last = hist[hist.length - 4];

    // First block
    if (last == "1" && second_last == "1" && third_last == "1") {
        string += "c";
    } else if (last == "1" && second_last == "1" && third_last != "1") {
        string += "b";
    } else if (last == "1" && second_last != "1" && third_last != "1") {
        string += "a";
    }

    // Second block
    if (last == "2" && second_last == "2" && third_last == "2" && fourth_last == "2") {
        string += "g";
    } else if (last == "2" && second_last == "2" && third_last == "2" && fourth_last != "2") {
        string += "f";
    } else if (last == "2" && second_last == "2" && third_last != "2" && fourth_last != "2") {
        string += "e";
    } else if (last == "2" && second_last != "2" && third_last != "2" && fourth_last != "2") {
        string += "d";
    }

    // Third block
    if (last == "3" && second_last == "3" && third_last == "3") {
        string += "j";
    } else if (last == "3" && second_last == "3" && third_last != "3") {
        string += "i";
    } else if (last == "3" && second_last != "3" && third_last != "3") {
        string += "h";
    }

    // Fourth block
    if (last == "4" && second_last == "4" && third_last == "4" && fourth_last == "4") {
        string += "n";
    } else if (last == "4" && second_last == "4" && third_last == "4" && fourth_last != "4") {
        string += "m";
    } else if (last == "4" && second_last == "4" && third_last != "4" && fourth_last != "4") {
        string += "l";
    } else if (last == "4" && second_last != "4" && third_last != "4" && fourth_last != "4") {
        string += "k";
    }

    // Fifth block (space)

    // Sixth block
    if (last == "6" && second_last == "6" && third_last == "6" && fourth_last == "6") {
        string += "r";
    } else if (last == "6" && second_last == "6" && third_last == "6" && fourth_last != "6") {
        string += "q";
    } else if (last == "6" && second_last == "6" && third_last != "6" && fourth_last != "6") {
        string += "p";
    } else if (last == "6" && second_last != "6" && third_last != "6" && fourth_last != "6") {
        string += "o";
    }

    // Seventh block
    if (last == "7" && second_last == "7" && third_last == "7" && fourth_last == "7") {
        string += "v";
    } else if (last == "7" && second_last == "7" && third_last == "7" && fourth_last != "7") {
        string += "u";
    } else if (last == "7" && second_last == "7" && third_last != "7" && fourth_last != "7") {
        string += "t";
    } else if (last == "7" && second_last != "7" && third_last != "7" && fourth_last != "7") {
        string += "s";
    }

    // Eighth block
    if (last == "8" && second_last == "8") {
        // Evaluate the sequence
    } else if (last == "8" && second_last != "8") {
        string += " ";
    }

    // Ninth block
    if (last == "9" && second_last == "9" && third_last == "9" && fourth_last == "9") {
        string += "z";
    } else if (last == "9" && second_last == "9" && third_last == "9" && fourth_last != "9") {
        string += "y";
    } else if (last == "9" && second_last == "9" && third_last != "9" && fourth_last != "9") {
        string += "x";
    } else if (last == "9" && second_last != "9" && third_last != "9" && fourth_last != "9") {
        string += "w";
    }

    print_text();
}

function print_text() {
    document.getElementById("text").innerHTML = string;
}

function mousePressed() {
    // First block
    if (mouseX < (x/3) && mouseY < (y/3) ) {
        color_for_1_sec([0, 0]);
        hist.push("1");
        communication();
        console.log("1");
    }
    // Second block
    else if (mouseX < (x/3) * 2 && mouseY < (y/3) ) {
        color_for_1_sec([(x/3), 0]);
        hist.push("2");
        communication();
        console.log("2");
    } 
    // Third block
    else if (mouseX < (x/3) * 3 && mouseY < (y/3) ) {
        color_for_1_sec([(x/3) * 2, 0]);
        hist.push("3");
        communication();
        console.log("3");
    }
    // Fourth block
    else if (mouseX < (x/3) && mouseY < (y/3) * 2) {
        color_for_1_sec([0, (y/3)]);
        hist.push("4");
        communication();
        console.log("4");
    }
    // Fifth block
    else if (mouseX < (x/3) * 2 && mouseY < (y/3) * 2) {
        // do nothing
        hist.push("5");
        communication();
        console.log("5");
    }
    // Sixth block
    else if (mouseX < (x/3) * 3 && mouseY < (y/3) * 2) {
        color_for_1_sec([(x/3) * 2, (y/3)]);
        hist.push("6");
        communication();
        console.log("6");
    }
    // Seventh block
    else if (mouseX < (x/3) && mouseY < (y/3) * 3) {
        color_for_1_sec([0, (y/3) * 2]);
        hist.push("7");
        communication();
        console.log("7");
    }
    // Eighth block
    else if (mouseX < (x/3) * 2 && mouseY < (y/3) * 3) {
        color_for_1_sec([(x/3), (y/3) * 2]);
        hist.push("8");
        communication();
        console.log("8");
    }
    // Ninth block
    else if (mouseX < (x/3) * 3 && mouseY < (y/3) * 3) {
        color_for_1_sec([(x/3) * 2, (y/3) * 2]);
        hist.push("9");
        communication();
        console.log("9");
    }
}