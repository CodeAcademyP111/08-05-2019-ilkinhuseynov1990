var arr = [17, 15, 14, 17, 21, 14];
var arr1 = [8, 9, 1, 1, 2, 5, 7, 9];
var arr2 = [8, 9, 10, 10, 20, 5, 20, 30,50,60,50,60];

// dublicat deyerleri elde etmek;

function dublicatarr(array) {
    var count = " ";
    for (var index = array.length - 1; index >= 0; index--) {

        for (var index1 = 1; index1 <= index; index1++) {

            if (array[index] == array[index1 - 1]) {
                count += " " + array[index].toString();
            }
            
        }

    }
    return count;
}

console.log(dublicatarr(arr));

console.log(dublicatarr(arr1))

console.log(dublicatarr(arr2));
