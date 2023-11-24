let width = 700;
let height = 700;

let turnCount = 0;


let leafyTreeConstants = {
    axiom: "X",
    len: 300,
    reducer: 0.5,
    rules: [
        { a: "X", b: "F+[[X]-X]-F[-FX]+X" },
        { a: "F", b: "FF" },
        { a: "L", b: "L" } // Rule for leaves, you can customize this rule
    ],
    drawRules: {
        "F": (len) => {

            stroke('rgba(120, 86, 53, 0.8)');
            line(0, 0, 0, -len);
            translate(0, -len);


        },
        "+": () => rotate(Math.PI / 6),
        "-": () => rotate(-Math.PI / 6),
        "[": () => push(),
        "]": () => {
            fill('rgba(0,255,0, 0.25)');
            ellipse(0, 0, 3, 6);
            translate(0, -leafyTreeConstants.len);
            pop(

            )
        },
        "L": (len) => { // Drawing rule for leaves, you can customize this rule
            //ellipse(0, 0, 10, 10); // Adjust size and shape as needed
            translate(0, -len);
        }
    },
    startPos: {
        x: width / 2, y: height
    }
}


let treeConstants = {

    axiom: "F",
    len: 300,
    reducer: 0.5,
    rules: [
        { a: "F", b: "FF+[+F-F-F]-[-F+F+F]" },


    ],
    drawRules: {
        "F": (len) => { line(0, 0, 0, - len); translate(0, - len); },
        "+": () => rotate(Math.PI / 6),
        "-": () => rotate(-Math.PI / 6),
        "[": () => push(),
        "]": () => pop(),

    },
    startPos: {
        x: width / 2, y: height
    }
}

let sierpinskiConstants = {
    axiom: "F-F-F",
    len: 700,
    reducer: 0.5,
    constants: "+ -",
    angle: (2 * Math.PI) / 3,
    drawRules: {
        "G": (len) => translate(0, -len),
        "F": (len) => {
            let colorValue = map(turnCount % 7, 0, 6, 0, 255);

            console.log("Turn: ", colorValue)
            // Set the stroke color
            stroke(colorValue, 100, 100);

            // Draw the line
            line(0, 0, 0, -len);

            // Translate without stroke affecting translation
            translate(0, -len);

            // Reset stroke to default
            stroke(0);


        },
        "+": () => {
            rotate(sierpinskiConstants.angle)
            turnCount++;
        },
        "-": () => {
            rotate(-sierpinskiConstants.angle)
            turnCount++;
        }
    },
    rules: [
        { a: "F", b: "F-G+F+G-F" },
        { a: "G", b: "GG" }
    ],
    startPos: {
        x: width, y: height
    }
}