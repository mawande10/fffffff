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


describe('findItemsOver20', function(){
    it('should return only items with quantiy over 20', function(){
        assert.deepEqual(findItemsOver20([{name:"apples", qty:10}, {name:"pears",qty:37}, {name:"bananas",qty:27}, ]), [{"name": "pears","qty": 37}, {"name":"bananas","qty":27}, ])
               
    });

    it('should return no items with quantiy over 20', function(){
        assert.notEqual(findItemsOver20([''],'', true));
        
    });

});
