describe('discoDancer', function() {

  var discoDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    discoDancer = new MakeDiscoDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(discoDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node change colors', function() {
    sinon.spy(discoDancer.$node, 'css');
    discoDancer.step();
    expect(discoDancer.$node.css.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(discoDancer, 'step');
      expect(discoDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(discoDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(discoDancer.step.callCount).to.be.equal(2);
    });
  });
});