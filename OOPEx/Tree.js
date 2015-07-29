(function (global, factory) {
   if (typeof exports === 'object' && typeof module !== 'undefined') {
     module.exports = factory();
   } else if (typeof define === 'function' && define.amd) {
     define(factory);
   } else {
     global.Tree = factory();
   }
}(this, function() {

  function Node(d){
    this.data = d;
    this.nextL = null;
    this.nextR = null;
  }

  function Tree(N){
    this.root = null || N;
  }

  Tree.prototype.addNode = function(currNode, N){
    if (this.root === null){
      this.root = N;
    }else{
      if (currNode.nextL === null){
      }else{
        if (currNode.nextR === null){
        }
      }else{
        //if 
      }

    }
  };
  })
);

