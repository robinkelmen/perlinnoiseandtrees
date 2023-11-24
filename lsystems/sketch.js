

let drawSentence = "";
let drawLen = 0;




let generateLSystem = (axiom, rules, lengthReducer, sentence, len) => {
	len *= lengthReducer;
	createP("Axiom: " + axiom);
	let nextSentence = "";

	console.log("sentence: ", sentence)
	for (let i = 0; i < sentence.length; i++) {

		let current = sentence.charAt(i);
		let found = false;

		for (const rule of rules) {
			console.log("checking rules");
			if (current === rule.a) {
				found = true;
				nextSentence += rule.b;
				break;
			}
		}

		if (!found) {
			nextSentence += current;
		}
	}

	sentence = nextSentence;
	createP(sentence);

	// Return the updated values for sentence and len
	return { sentence, len };
}

let turtleLSystem = (sentence, len, drawRules, start) => {
	translate(start.x, start.y);
	stroke(255, 100);

	for (let i = 0; i < sentence.length; i++) {
		let current = sentence.charAt(i);

		if (drawRules[current]) {
			drawRules[current](len);
		}
	}
}

let drawLSystem = (systemConstants, start) => {


	if (drawSentence == "") {
		drawSentence = systemConstants.axiom;


	}
	if (drawLen == 0) {
		drawLen = systemConstants.len;
	}

	for (let i = 0; i < 5; i++) {
		let { sentence, len } = generateLSystem(
			systemConstants.axiom,
			systemConstants.rules,
			systemConstants.reducer,
			drawSentence,
			drawLen
		);
		drawSentence = sentence;
		drawLen = len;


	}

	//createP("New Sentence: ", sentence);

	turtleLSystem(drawSentence, drawLen, systemConstants.drawRules, start);




}


const tree = () => {
	reset();
	drawLSystem(treeConstants, treeConstants.startPos)
}

const sierpinskiFunc = () => {
	reset();

	drawLSystem(sierpinskiConstants, sierpinskiConstants.startPos)
}

const leafyTree = () => {
	reset();

	drawLSystem(leafyTreeConstants, leafyTreeConstants.startPos)
}



const reset = () => {
	drawSentence = "";
	drawLen = 0;
	createCanvas(width, height);
	background(51);
}



function setup() {
	createCanvas(width, height);
	background(51);

	///turtle();
	var button = createButton("Generate");
	button.mousePressed(tree);

	var sierpinski = createButton("Generate Sierpinski");
	sierpinski.mousePressed(sierpinskiFunc);

	var leafy = createButton("Generate Leafy Tree");
	leafy.mousePressed(leafyTree);


}

function draw() {

}
