// Input: str = "ABCDEFGH"
//        n = 2
// Output: "ACEGBDFH"
// Explanation: Let us write input string in Zig-Zag fashion
//              in 2 rows.
// A   C   E   G   
//   B   D   F   H
// Now concatenate the two rows and ignore spaces 
// in every row. We get "ACEGBDFH"

// Input: str = "GEEKSFORGEEKS"
//        n = 3
// Output: GSGSEKFREKEOE
// Explanation: Let us write input string in Zig-Zag fashion
//              in 3 rows.
// G       S       G       S
//   E   K   F   R   E   K
//     E       O       E
// Now concatenate the two rows and ignore spaces 
// in every row. We get "GSGSEKFREKEOE"


/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */

var GFG = (function () {
    function GFG() {
    }
    GFG.printZigZagConcat = function (str, n) {
        if (n === 1) {
            console.log(str);
            return;
        }
        var str1 = (str).split('');
        var len = str.length;
        var arr = (function (s) { 
            var a = []; 
            while (s-- > 0)
            a.push(null); return a; 
        }
        )(n);
        console.log("111",arr);
        (function (a, v) 
            { for (var i = 0; i < a.length; i++)
                a[i] = v; 
            }
        )(arr, "");
        console.log("222",arr);
        var row = 0;
        var down = true;
        for (var i = 0; i < len; ++i) {
            {
                arr[row] += (str1[i]);
                console.log("@@@@",arr);
                if (row === n - 1) {
                    down = false;
                }
                else if (row === 0) {
                    down = true;
                }
                if (down) {
                    row++;
                }
                else {
                    row--;
                }
            }
            ;
        }
        console.log("1111111",arr);
        for (var i = 0; i < n; ++i) {
            {
                console.log(arr[i]);
            }
            ;
        }
    };
    GFG.main = function (args) {
        var str = "GEEKSFORGEEKS";
        var n = 3;
        GFG.printZigZagConcat(str, n);
    };
    return GFG;
}());
GFG["__class"] = "GFG";
GFG.main(null);

const printZigZagConcat = (str, n) => {
    
}
//printZigZagConcat("ACEGBDFH", 2);

