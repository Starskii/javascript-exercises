const ageSort = (a, b) => {
    let currentDate = new Date();
    currentDate = currentDate.getFullYear();
    if (a.yearOfDeath == null)
        a.yearOfDeath = currentDate;
    if (b.yearOfDeath == null)
        b.yearOfDeath = currentDate;
    a = a.yearOfDeath - a.yearOfBirth;
    b = b.yearOfDeath - b.yearOfBirth;
    if (a > b)
        return -1;
    if (a == b)
        return 0;
    if (a < b)
        return 1;
}

const findTheOldest = function(people) {
    return people.sort(ageSort)[0];
};


// Do not edit below this line
module.exports = findTheOldest;
