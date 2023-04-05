describe('stretchyDancer', function() {

  var stretchyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    stretchyDancer = new MakeStretchyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(stretchyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node stretch and shrink', function() {
    sinon.spy(stretchyDancer.$node, 'height');
    stretchyDancer.step();
    expect(stretchyDancer.$node.height.called).to.be.true;
  });

  it('should have a step function that makes its node a random color', function() {
    sinon.spy(stretchyDancer.$node, 'css');
    stretchyDancer.step();
    expect(stretchyDancer.$node.css.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(stretchyDancer, 'step');
      expect(stretchyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(stretchyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(stretchyDancer.step.callCount).to.be.equal(2);
    });
  });
});