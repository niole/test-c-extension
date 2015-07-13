(function (global, factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  } else {
    global.LL = factory();
  }
}(this, function() {

    function LL() {
      this.head = null;
    }

    LL.prototype.add = function(data) {
      var node = {
        data: null,
        next: null
      };

      node.data = data;
      if (this.head === null){
        this.head = node;
        this.head.next = null;
      } else {
        node.next = this.head;
        this.head = node;
      }
    };

    LL.prototype.find = function(currNode,data){

      if (currNode.data === data){
        return currNode;
      }
      if (currNode.data !== data && currNode.next === null){
        return false;
      } else {
        return this.find(currNode.next,data);
      }
    };

   return LL;
}));
