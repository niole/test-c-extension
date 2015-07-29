(function (global, factory) {
   if (typeof exports === 'object' && typeof module !== 'undefined') {
     module.exports = factory();
   } else if (typeof define === 'function' && define.amd) {
     define(factory);
   } else {
     global.BST = factory();
   }
}(this, function() {

    function BST(){
      this.root = null;
    }

    BST.prototype.increment2 = function(v){
      return v += 2;
    };

    BST.prototype.increment1 = function(v){
      return v += 1;
    };

    BST.prototype.sumWScopes = function(){
      var value = 0;
      var mutatedValue = this.increment1(value);
      if (value === mutatedValue){
        return true;
      }

    };

    //assigning an object with the relevant
    //attributes (plusone, getval) as the result of invoking BST.numbers
    //this hides the variable 'value' from the rest of the program!
    BST.prototype.createClosure = function(){
      var value = 0;

      return {
        plusone: function(){
          value += 1;
        },
        getval: function(){
          return value;
        }
      };
    }();

    BST.prototype.compareVars = function(){
      var value = 0;
      this.createClosure.plusone();
      var result = this.createClosure.getval();
      if (value !== result){
        return true;
      }
    };

    BST.prototype.find = function(node,v){
      if (v === node.data){
        return true;
      }
      if (v < node.data){
        if (node.nextL !== null){
          return this.find(node.nextL, v);
        }else{
          return false;
        }
      }
      if (v > node.data){
        if (node.nextR !== null){
          return this.find(node.nextR, v);
        }else{
          return false;
        }
      }
    };

    BST.prototype.count = function(root){
      var tosee = [root];
      var seen = [];
      var curr;
      while (tosee.length > 0){
        curr = tosee.pop();
        seen.push(curr);

        if (curr.nextR !== null){
          tosee.push(curr.nextR);
        }
        if (curr.nextL !== null){
          tosee.push(curr.nextL);
        }
      }
      return seen.length;
    };

    BST.prototype.add = function(node,v,prevNodes){
      var n = {
        data: null,
        nextL: null,
        nextR: null
      };

//      var prevNodes = [this.root];
      console.log('node');
      console.log(node);
      console.log('prevNodes');
      console.log(prevNodes);


      if (this.root === null){
          n.data = v;
          this.root = n;
      }else{
        if (node.nextR !== null && v > node.nextR.data){ //while not at leaf and should go down right side
          console.log('node');
          console.log(node);
          console.log('prevNodes');
          console.log(prevNodes);

          prevNodes.push(node);
          return this.add(node.nextR,v,prevNodes);
        }
         if (node.nextL !== null && v <= node.nextL.data){//while not at leaf and should go down left
          prevNodes.push(node);
          //node = node.nextL;
          return this.add(node.nextL,v,prevNodes);

         }
         //check if at leafA
         if (node === null){
           console.log('inside if leaf');
           console.log('prevNodes[prevNodes.length-1].data');
           console.log(prevNodes[prevNodes.length-1].data);
           n.data = v;
           if (prevNodes[prevNodes.length-1].data >= v){
             //put on left
              prevNodes[prevNodes.length-1].nextL = n;
           }else{
             //put on right
              prevNodes[prevNodes.length-1].nextR = n;
           }
         }
       }
    };
  return BST;
  })
);
