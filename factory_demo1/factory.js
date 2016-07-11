var productManager = {};

productManager.createProductA = function () {
    console.log('ProductA');
};

productManager.createProductB = function () {
    console.log('ProductB');
};

productManager.factory = function (typeType) {
    return new productManager[typeType];
};

productManager.factory("createProductA");

