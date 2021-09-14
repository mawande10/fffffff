assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));

describe('yearsAgo' , function(){
    it('should return how many years ago' , function(){
        var num = '8'
            assert.equal(yearsAgo(num), 2013);
        
    });

    it('should return a variable which is a string' , function(){
        assert.typeOf('num', 'string', 'it s a string');

    });

    it('should return it is not true' , function(){
        var num = '13'
            assert.notEqual(yearsAgo(num), 2015);

    });

});
