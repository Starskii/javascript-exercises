const removeFromArray = function() {
    if (arguments.length >= 2){
        for(let i = 1; i < arguments.length; i++){
            for(let j = 0; j < arguments[0].length; j++){
                console.log(`${arguments[i]} and ${arguments[0][j]}`);
                console.log(arguments[i] === arguments[0][j]);
                if(arguments[i] === arguments[0][j]){
                    arguments[0].splice(j, 1);
                    i--;
                }
            }
        }
    }else{
        return;
    }
    return arguments[0];
};

// Do not edit below this line
module.exports = removeFromArray;
