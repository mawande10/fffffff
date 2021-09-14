var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
assert.equal(regCount, 3);

var regCount = countRegNumber('CA 182736')
assert.equal(regCount, 1);

describe('countRegNumber' , function(){
    it('If the test passes, it should count the registration numbers' , function(){
        assert.equal(countRegNumber('CA 182736,CY 523519, CJ 812328'), 3)

    });

    it('If the test fails it should not count registration numbers' , function(){
        assert.equal(countRegNumber('CA 182736,CY 523519, CJ 812328, CJ 567486'), 4)
        

    });

});
