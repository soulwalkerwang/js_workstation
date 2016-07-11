function test() {
    alert(1);
    return "hello";
}

Function.prototype.before = function (func) {
    var __bself = this;
    return function () {
        if (func.apply(this, arguments) == false){
            return false;
        }
        return __bself.apply(__bself, arguments);

    }
};

Function.prototype.after = function (func) {
    var __aself = this;
    return function () {
        var ret = __aself.apply(__aself, arguments);
        if (ret == false) {
            return false;
        }
        func.apply(this, arguments);
        return ret;
    }
};

test.before(function (){
    alert(2);
})();


// test.before(function () {
//     alert(2);
// }).after(function () {
//     alert(3);
// })();