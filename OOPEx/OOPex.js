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

    LL.prototype.del = function(currNode, goal){
      var node = currNode;
      var prevNode = null;
      if (this.head.data === goal){
        this.head = this.head.next;
      }
      while (node.data !== goal){
        if (node.next === null){
          return false;
        }
        prevNode = node;
        node = node.next;
        if (node.data === goal){
          prevNode.next = node.next;
        }
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

    LL.prototype.findMth = function(head,m){
      var contexts = [head];
      var length = 1;
      var currNode = head;

      while(currNode.next !== null){
        contexts.push(currNode);
        length += 1;
        currNode = currNode.next;
      }
      if (currNode.next === null && length < m){
        return false;
      }
      if (currNode.next === null){
        contexts.push(currNode);
        while (m>1){
          contexts.pop();
          m -= 1;
          if (m === 1){
            return contexts.pop();
          }
        }
      }
    };

    LL.prototype.findCycle = function(head){
      var visitedSet = {};
      var node = head;
      while (node.next !== null){
        if (visitedSet[node] === 1){
          return true;
        }
        visitedSet[node] = 1;
        node = node.next;
      }
      return false;
    };
   return LL;
}));
