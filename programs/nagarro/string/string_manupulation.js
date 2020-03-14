// https://www.geeksforgeeks.org/nagarro-interview-experience-for-xamarin-developer-3-years-experience/
//  Input  : this_is_variable or thisIsVariable
//  Ouptut : thisIsVariable or this_is_variable

function dualStringManupulation(inp) {
    var checkPoint = inp.split("_");
    var str = "";
    if (checkPoint.length > 1) {
        for (var i = 0; i < inp.length; i++) {
            if (inp.charAt(i) == "_") {
                str = str + inp.charAt(i + 1).toUpperCase();
                i++
            } else {
                str = str + inp.charAt(i);
            }
        }
    }
    if (checkPoint.length === 1) {
        for (var i = 0; i < inp.length; i++) {
            if (inp.charAt(i) === inp.charAt(i).toUpperCase()) {
                str = str + "_" + inp.charAt(i).toLowerCase();
            }
            else {
                str = str + inp.charAt(i);
            }
        }
    }
    return str;
}

console.log("this_is_variable:-------",dualStringManupulation("this_is_variable"))
console.log("thisIsVariable:-------",dualStringManupulation("thisIsVariable"))