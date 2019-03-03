module.exports = function getZerosCount(number, base) {

    var fact = 1;
    var count = 0;
    var arr = [];

    for (var i = 1; i <= number; i++) {
        fact = fact * i;
    }


    while (fact !== 0) {
        var newSS = fact % base;
        fact = Math.trunc(fact / base);
        var newArr = arr.push(newSS);
    }


    for (var j = 0; j < arr.length; j++) {
        if (arr[j] == 0) {
            count++
        }
        else {
            break;
        }
    }

    return count;


}