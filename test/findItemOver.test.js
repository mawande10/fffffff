var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];

var itemList2 = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 19},
    {name : 'bananas', qty : 17},
    {name : 'apples', qty : 3},
];

var results2 = [];

var itemList3 = [
    {name : 'apples', qty : 40},
    {name : 'pears', qty : 20},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
];

var results3 = [
    {name : 'apples', qty : 40},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
];
assert.deepEqual(results, findItemsOver(itemList, 20));
assert.deepEqual(results2, findItemsOver(itemList2, 20));
assert.deepEqual(results3, findItemsOver(itemList3, 20));

console.log('findItemsOver passed!');


describe('findItemsOver' , function(){

    it('should return that these numbers are not equivalent' , function(){
        assert.notEqual(20,25,"these are not equal");
    });

    it('should return that items less than 25 are less than the threshold' , function(){
        assert.isAbove(25, 19, '25 is greater than 19');
    });

    it('should return that items greater than 25, are greater than the threshold' , function(){
        assert.isBelow(21, 25, '21 is strictly less than 25');

    });

});
