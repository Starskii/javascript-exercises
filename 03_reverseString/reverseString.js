const reverseString = function(message) {
    let reversedMessage = '';
    for(let i = message.length; i >= 0; i--){
        reversedMessage += message.charAt(i);
    }
    return reversedMessage;
};

console.log(reverseString('hello'));

// Do not edit below this line
module.exports = reverseString;
