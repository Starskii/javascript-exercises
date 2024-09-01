const palindromes = function (pal) {
    pal = pal.split('').filter((char) => {return /[a-zA-Z0-9]/.test(char)}).map((char) => {return char.toLowerCase()}).join('');
    console.log(pal);
    for(let i = 0; i < pal.length/2; i++){
        if(pal.charAt(i) != pal.charAt(pal.length-(i+1)))
            return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
