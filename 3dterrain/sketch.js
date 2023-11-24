
let width = 5000;
let height = 5600;
let cols, rows;

let scale = 20;

let flying = 0;

let grid = [];



function setup() {
    createCanvas(2700, 1700, WEBGL);

    cols = width / scale;
    rows = height / scale;





}

function draw() {

    grid = [];
    flying -= 0.05;
    let yoff = 0;
    for (let y = 0; y < rows; y++) {
        let row = [];
        let xoff = flying;
        for (let x = 0; x < cols; x++) {
            row.push(map(noise(xoff, yoff), 0, 1, -100, 100));
            xoff += 0.2;
        }
        grid.push(row);
        yoff += 0.2;
    }


    background(135, 206, 250);

    noStroke();
    fill(255, 200, 200, 150);

    //translate(width / 2, height / 2)
    rotateX(Math.PI / 3);

    translate(-width / 2, -height / 2);





    for (let y = 0; y < rows - 1; y++) {

        beginShape(TRIANGLE_STRIP);
        for (let x = 0; x < cols; x++) {

            vertex(x * scale, y * scale, grid[x][y]);
            vertex(x * scale, (y + 1) * scale, grid[x][y + 1]);



        }
        endShape();
    }
}
