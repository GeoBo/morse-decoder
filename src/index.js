const MORSE_TABLE = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
};

function decode(expr) {
    let morseCode = "";
    let decode = "";

    for (let i = 0; i < expr.length; i = i + 2) {
        if (expr[i] == "*") {
            decode += " ";
            i = i + 8;
            continue;
        }

        if (expr[i] == 1) {
            if (expr[i + 1] == 1) morseCode += "-";
            else morseCode += ".";
        }

        if ((i + 2) % 10 == 0) {
            decode += MORSE_TABLE[morseCode];
            morseCode = "";
        }
    }

    return decode;
}

module.exports = {
    decode,
};
