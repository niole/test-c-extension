var expect = require('expect.js');
var LL = require('../OOPex.js');
var BST = require('../BST.js');

describe('counter',function(){
  var c = new BST();
  var b = new BST();
  var a = new BST();
  describe('multiple counters', function(){
    it('creating a closure', function(done){
      a.createClosure.plusone();
      var result = a.createClosure.getval();
      expect(result).to.equal(1);
      done();
    });

    it('not mutating value', function(done){
      expect(b.compareVars()).to.equal(true);
      done();
    });


  });

});

describe('binary search tree', function(){
  var bst = new BST();
  describe('add',function(){
    it('add root', function(done){
      bst.add(bst.root,0);
      expect(bst.find(bst.root,0)).to.equal(true);
      expect(bst.count(bst.root)).to.equal(1);

      done();
    });

    it('add second', function(done){
      bst.add(bst.root,1);
      expect(bst.find(bst.root,1)).to.equal(true);
      expect(bst.count(bst.root)).to.equal(2);

      done();
    });

    it('can add third', function(done){
      bst.add(bst.root,10);
      expect(bst.find(bst.root,10)).to.equal(true);
      done();
    });

  });

});

describe('linked list', function() {
  var ll = new LL();
  var xx = new LL();
  var yy = new LL();

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

  describe('delete', function(){
    it('deletes node with specified data', function(done){
      ll.del(ll.head, 10);
      expect(ll.find(ll.head,10)).to.equal(false);
      ll.add(9);
      ll.add(7);
      ll.add(0);
      ll.del(ll.head, 1);
      expect(ll.find(ll.head,1)).to.equal(false);
      expect(ll.del(ll.head, 100)).to.equal(false);
      done();
    });
  });

  describe('find Mth', function(){
    it('finds mth node from tail', function(done){
      xx.add(9);
      xx.add(7);
      xx.add(0);
      xx.add(8);
      xx.add(1);
      var res = xx.findMth(xx.head,3);
      expect(res.data).to.equal(0);
      expect(xx.findMth(xx.head,8)).to.equal(false);
      done();
    });
  });

  describe('find cycle', function(){
    it('returns bool if a cycle exists', function(done){
    yy.add(1);
    yy.add(0);

    xx.add(8);
    expect(xx.findCycle(xx.head)).to.equal(true);
    expect(yy.findCycle(yy.head)).to.equal(false);
    done();
    });
  });


});
