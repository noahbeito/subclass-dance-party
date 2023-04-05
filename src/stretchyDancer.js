var MakeStretchyDancer = function(top, left, timeBetweenSteps) {
  // set unique properties
  this.maxHeight = 100;
  this.minHeight = 10;
  this.maxHeightReached = false;
  this.colors = ['green', 'blue', 'red', 'orange', 'yellow', 'purple', 'pink'];
  this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
  // then call makeDancer
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

// set prototype
MakeStretchyDancer.prototype = Object.create(MakeDancer.prototype);
// set constructor
MakeStretchyDancer.prototype.constructor = MakeStretchyDancer;

// implement step method
MakeStretchyDancer.prototype.step = function () {
  MakeDancer.prototype.step.call(this);

  this.$node.css('border-color', this.color);

  if (this.$node.height() < this.maxHeight && !this.maxHeightReached) {
    this.$node.height(this.$node.height() + 10);
  } else if (this.$node.height() === this.maxHeight && !this.maxHeightReached) {
    this.maxHeightReached = true;
  }

  if (this.$node.height() > this.minHeight && this.maxHeightReached) {
    this.$node.height(this.$node.height() - 10);
  } else if (this.$node.height() === this.minHeight && this.maxHeightReached) {
    this.maxHeightReached = false;
  }
};