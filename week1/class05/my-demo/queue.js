module.exports = function Queue() {
  this.queue = [];

  this.dequeue = function(){
    return this.queue.shift();
  };

  this.enqueue = function(item){
    this.queue.push(item);
  };

  this.peek = function(){
    return this.queue[0];
  };

  this.length = function() {
    return this.queue.length;
  };

  this.hasNext = function() {
    return this.length() !== 0;
  };

};
