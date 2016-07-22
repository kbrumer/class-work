module.exports = function Stack() {
  this.stack = [];

  this.pop = function(){
    return this.stack.pop();
  };

  this.push = function(item){
    this.stack.push(item);
  };

  this.peek = function(){
    return this.stack[this.length() - 1];
  };

  this.length = function() {
    return this.stack.length;
  };

};
