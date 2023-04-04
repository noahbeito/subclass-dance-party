var MakeDiscoDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);

  this.colors = ['green', 'blue', 'red', 'orange', 'yellow'];
  console.log(this);

  this.count = 0;

};

MakeDiscoDancer.prototype = Object.create(MakeDancer.prototype);
MakeDiscoDancer.prototype.constructor = MakeDiscoDancer;

MakeDiscoDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.count++;
  // this.$node. cycle colors.....

  var index = this.count % 5;
  console.log(this);
  var newColor = this.colors[index];
  this.$node.css('border-color', newColor);
};