describe("stack", function() {
  var stack;

  beforeEach(function() {
    stack = makeStack();
  });

  describe("insert", function() {
    it("should be a method", function() {
      expect(stack.insert).toEqual(jasmine.any(Function));
    });

    it("should give a value to data and increment length", function(){
      var length1 =  stack.length();
      stack.insert(7);
      var length2 = stack.length();

      expect(length1 === length2 - 1).toBeTruthy();
    });
  });

  
  describe('remove', function() {
    it("should be a method", function() {
      expect(stack.remove).toEqual(jasmine.any(Function));
    });

    it("should decrement the length", function() {
      stack.insert("tim");
      var length1 = stack.length();
      stack.remove("tim");
      var length2 = stack.length();

      expect(length1 === length2 + 1).toBeTruthy()
    })

    it('should return the element removed', function(){
      stack.insert('tony');
      stack.insert('tim');
      expect(stack.remove()).toEqual('tim');
    });

  });

  describe("contains", function(){
    it("should be a method", function() {
      expect(stack.contains).toEqual(jasmine.any(Function));
    });

    it("should check if a specific value exists inside of data", function() {
      stack.insert(5);

      expect(stack.contains(5)).toBeTruthy();
    });

    it('should return false if the query is not present in the stack', function(){
      stack.insert(2);
      expect(stack.contains(3)).toBeFalsy();
    });

  })

});