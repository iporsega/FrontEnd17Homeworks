//  using nested for generate the following pattern
// 0 1 0 1
// 1 0 1 0
// 0 1 0 1
// 1 0 1 0


var firstLine = "";
var secondLine = "";

function pattern(x, y) {
    for(i = 1; i <= x; i++) {
        if(i % 2 == 0) {
            firstLine = firstLine + "1 ";
        }
        else {
            firstLine = firstLine + "0 ";
        }
    }
    
    for(j = 1; j <= x; j++) {
        if(j % 2 == 0) {
            secondLine = secondLine + "0 ";
        }
        else {
            secondLine = secondLine + "1 ";
        }
    }
    
    console.log(firstLine + "\n" + secondLine + "\n" + firstLine + "\n" + secondLine);
    
}

pattern(4,4);


