module.exports = function toReadable(number) {
    let th = 0;
    let nword = "";
    let hundredWord = "hundred";
    if (number === 0) {
        nword = "zero";
    } else {
        while (number > 0) {
            th += 1;
            let gr = number % 1000;

            console.log(gr);

            number = (number - gr) / 1000;
            if (gr > 0) {
                let d3 = (gr - (gr % 100)) / 100;
                let d1 = gr % 10;
                let d2 = (gr - d3 * 100 - d1) / 10;
                if (d2 === 1) d1 = 10 + d1;

                if (d3 > 0)
                    nword = `${module.exports.getSingleTranscription(
                        d3
                    )} ${hundredWord}`;
                if (d2 > 0) {
                    nword += module.exports.getDecimalPlaceTranscription(d2);
                }
                if (d1 > 0) {
                    nword += module.exports.getSingleTranscription(d1);
                }
            }
        }
    }

    return nword.trim();
};

module.exports.getSingleTranscription = (number) => {
    if (number === 1) return " one";
    else if (number === 2) return " two";
    else if (number === 3) return " three";
    else if (number === 4) return " four";
    else if (number === 5) return " five";
    else if (number === 6) return " six";
    else if (number === 7) return " seven";
    else if (number === 8) return " eight";
    else if (number === 9) return " nine";
    else if (number === 10) return " ten";
    else if (number === 11) return " eleven";
    else if (number === 12) return " twelve";
    else if (number === 13) return " thirteen";
    else if (number === 14) return " fourteen";
    else if (number === 15) return " fifteen";
    else if (number === 16) return " sixteen";
    else if (number === 17) return " seventeen";
    else if (number === 18) return " eighteen";
    else if (number === 19) return " nineteen";
    else return "";
};

module.exports.getDecimalPlaceTranscription = (number) => {
    if (number === 2) return " twenty";
    else if (number === 3) return " thirty";
    else if (number === 4) return " forty";
    else if (number === 5) return " fifty";
    else if (number === 6) return " sixty";
    else if (number === 7) return " seventy";
    else if (number === 8) return " eighty";
    else if (number === 9) return " ninety";
    else return "";
};
