const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ': ' ',
};

function decode(expr) {
    const strArray = expr.match(/.{1,10}/g);

    for (let i = 0; i < strArray.length; i++) {
        if (strArray[i] === '**********') {strArray[i] = ' ';}
        else {
            strArray[i] = strArray[i].replace(/00/gi, '');
            strArray[i] = strArray[i].replace(/10/gi, '.');
            strArray[i] = strArray[i].replace(/11/gi, '-');
        }
    }
    let msgConverted = '';
    for (let i = 0; i < strArray.length; i++) {
        msgConverted += MORSE_TABLE[strArray[i]];
    }
    return msgConverted;

}

module.exports = {
    decode
}