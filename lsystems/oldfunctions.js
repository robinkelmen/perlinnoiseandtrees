let generate = () => {

    createP("Axiom: " + axiom);
    len *= 0.5;
    let nextSentence = "";
    for (let i = 0; i < sentence.length; i++) {
        let current = sentence.charAt(i);

        let found = false;
        for (let j = 0; j < rules.length; j++) {

            if (current == rules[j].a) {
                nextSentence += rules[j].b;
                break;
            }
        }

        if (!found) {
            nextSentence += current;
        }




    }
    sentence = nextSentence;
    createP(sentence);
    turtle();

}

let turtle = () => {

    translate(width / 2, height);
    stroke(255, 100);
    for (let i = 0; i < sentence.length; i++) {
        let current = sentence.charAt(i);

        if (current == "F") {
            line(0, 0, 0, -len);
            translate(0, -len);
        } else if (current == "+") {

            rotate(Math.PI / 6)
        }
        else if (current == "-") {
            rotate(-Math.PI / 6)
        }
        else if (current == "[") {

            push();
        }
        else if (current == "]") {
            pop()
        }
    }
}

let generateSierpinski = () => {

    sLen *= 0.5;
    createP("Axiom: " + sierpinskiConstants.axiom);
    var nextSentence = "";

    for (let i = 0; i < sierpinskiSentence.length; i++) {
        var current = sierpinskiSentence.charAt(i);

        let found = false;
        for (const r of sierpinskiRules) {
            if (current == r.a) {
                found = true;
                nextSentence += r.b;
                break;
            }

        }
        if (!found) {
            nextSentence += current;
        }

    }
    sierpinskiSentence = nextSentence;
    createP(sierpinskiSentence);
    turtleSierpinski();

}

let turtleSierpinski = () => {

    translate(width, height);
    stroke(255, 100);
    for (let i = 0; i < sierpinskiSentence.length; i++) {
        let current = sierpinskiSentence.charAt(i);

        if (current === "G") {
            translate(0, -sLen);
        } else if (current === "F") {
            line(0, 0, 0, -sLen);
            translate(0, -sLen);  // Move forward after drawing
        } else if (current === "+") {
            rotate((2 * Math.PI) / 3);  // Turn left
        } else if (current === "-") {
            rotate(-(2 * Math.PI) / 3);  // Turn right
        }



    }


}