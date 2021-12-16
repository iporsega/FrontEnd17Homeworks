//  compute the maximum of the elements of an array and display it in the console

var myArr = [1, 2, 3, 5, 1, 2],
elem = myArr[0],
i;

for (i = 0; i <= myArr.length - 1; i++) {
    if(elem < myArr[i]) {
        elem = myArr[i];
    }
}
console.log("The maximum of the elements is " + elem);
