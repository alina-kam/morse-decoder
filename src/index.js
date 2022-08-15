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
};

function decode(expr) {
    let subExprNum = '';
    let result = '';
    for (let i = 0; i < expr.length - 9; i += 10){
        subExprNum = expr.substr(i, 10);
        let subExprLet = '';
        for (let j = 0; j < 9; j += 2){
            if (subExprNum.substring(j, j+2) === '10'){
                subExprLet += '.';
            }
            else if(subExprNum.substring(j, j+2) === '11'){
                subExprLet += '-';
            }
        }
        result += MORSE_TABLE[subExprLet] || ' ';
    }


    return result;
}

module.exports = {
    decode
}

decode("0000101010000000101100101010110000000010**********00000011110000000010");