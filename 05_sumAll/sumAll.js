const sumAll = function(numa, numb) {
    if(!Number.isInteger(numa) || !Number.isInteger(numb))
        return 'ERROR';
    if(numa < 0 || numb < 0)
        return 'ERROR';
    let change = 1;
    if(numa > numb)
        change = -1;
    let sum = 0;
    while(numa != numb + change){
        sum += numa;
        numa += change;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
