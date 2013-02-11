describe("queue", function() {
  var queue;

  beforeEach(function() {
    queue = makeQueue();
  });

  describe("insert", function() {
  	it("should be a method", function(){
  		expect(queue.insert).toEqual(jasmine.any(Function));	
  	});

  	it("should place a new value into queue", function() {
  		var length1 = queue.length();
  		queue.insert("tim");
  		var length2 = queue.length();

  		expect(length1).toEqual(length2 - 1);
  	});
  });

  describe("remove", function() {
  	it("should be a method", function(){
  		expect(queue.remove).toEqual(jasmine.any(Function));
  	});

  	it("should remove a value from the queue", function() {
  		queue.insert("tony");
  		var length1 = queue.length();
  		queue.remove("tony");
  		var length2 = queue.length();

  		expect(length1).toEqual(length2 + 1);
  	});

  	it("should correctly remove oldest item", function() {
  		queue.insert("catalyst");
  		queue.insert("San Francisco");
  		queue.insert("Beach");
  		queue.insert("Tom Cruise");


  		expect(queue.remove()).toEqual("catalyst");
  	});

  });

  describe("contains", function(){
    it("should be a method", function() {
      expect(queue.contains).toEqual(jasmine.any(Function));
    });

    it("should check if a specific value exists inside of data", function() {
      queue.insert(5);

      expect(queue.contains(5)).toBeTruthy();
    });
  });

  it("should check the length of the que", function() {
  	expect(queue.length()).toEqual(jasmine.any(Number))
  });
});