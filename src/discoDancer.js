var MakeDiscoDancer = function(top, left, timeBetweenSteps) {

  this.colors = ['green', 'blue', 'red', 'orange', 'yellow', 'purple', 'pink'];

  this.count = 0;

  // this.$node = $('<span class="dancer discoDancer"></span>');

  // this.$node.mouseover(function () {
  //   this.$node.css('border-radius', '50px')
  // });
  MakeDancer.call(this, top, left, timeBetweenSteps);

};

MakeDiscoDancer.prototype = Object.create(MakeDancer.prototype);
MakeDiscoDancer.prototype.constructor = MakeDiscoDancer;

MakeDiscoDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.count++;
  // this.$node. cycle colors.....

  var index = this.count % this.colors.length;
  this.$node.css('border-color', this.colors[index]);
  //this.$node.toggle();
  // if this.$node is within x distance of another node, reposition it
  var currentTop = this.top;
  var currentLeft = this.left;
  var minDistance = 1000;

  for (var i = 0; i < window.dancers.length; i++) {
    var dancer = window.dancers[i];

    var distance = Math.sqrt( (dancer.top - currentTop) ** 2 ) + ((dancer.left - currentLeft) ** 2);
    console.log(distance)
    if (distance < minDistance && distance !== 0) {
      this.setPosition(dancer.top + 50, dancer.left + 50);
    }
  }
};