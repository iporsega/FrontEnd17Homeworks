//  compute how many times a certain element appears in an array

var myArr = [2, 1, 4, 2, 1, 1, 4, 5];  

function countInArray(x, y) {
    var countElem = 0;
    for (i = 0; i < x.length; i++) {
        if (x[i] === y) {
            countElem++;
        }
    }
    console.log(countElem);
}

countInArray(myArr, 2); // returns 2
countInArray(myArr, 1); // returns 3
countInArray(myArr, 4); // returns 2
countInArray(myArr, 5); // returns 1
countInArray(myArr, 7); // returns 0