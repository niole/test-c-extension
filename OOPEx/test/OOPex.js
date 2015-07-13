var expect = require('expect.js');
var LL = require('../OOPex.js');

describe('linked list', function() {
  var ll = new LL();

  describe('#add', function() {
    it('adds first element to the linked list', function(done) {
      ll.add(1);
      expect(ll.head.data).to.equal(1);
      done();
    });

    it('adds second element to the linked list', function(done) {
      ll.add(10);
      expect(ll.head.data).to.equal(10);
      expect(ll.head.next.data).to.equal(1);
      done();
    });
  });

  describe('find', function(){
    it('finds node with niputted data', function(done){
      var res = ll.find(ll.head,1);
      expect(res.data).to.equal(1);
      done();
    });
  });
});
