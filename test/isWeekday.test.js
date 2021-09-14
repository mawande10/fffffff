assert.equal(isWeekday('Saturday'), false);
assert.equal(isWeekday('Monday'), true);

describe('isWeekday' , function(){
    it('should print out it is week day', function(){
        var day = 'Monday';
            assert.equal(isWeekday(day), true);

    });

    it('should print out it is not a week day' , function(){
        var day = 'Saturday';
            assert.equal(isWeekday(day), false);
        
    });

    it('should only read strings variables' , function(){
        assert.typeOf("day", 'string', 'day is a string');

    });

});
