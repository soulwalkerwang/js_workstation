/**
 * Created by gwang on 4/12/2016.
 */
function sum(x) {
    return function (y) {
        return x + y;
    }
}

var a = sum(2)(3);
alert(a);