const assert    = require('chai').assert,
      moment    = require('moment-range').extendMoment(require('moment')),
      timeframe = require('../');


describe('Timeframe', () => {

  it('should handle previous 1', () => {
    const range = timeframe('previous_1_day');
    assert.equal(range.start.toISOString(), moment().subtract(1, 'day').startOf('day').toISOString());
    assert.equal(range.end.toISOString(), moment().subtract(1, 'day').endOf('day').toISOString());
  });

  it('should handle previous n', () => {
    const range = timeframe('previous_3_days');
    assert.equal(range.start.toISOString(), moment().subtract(3, 'day').startOf('day').toISOString());
    assert.equal(range.end.toISOString(), moment().subtract(1, 'day').endOf('day').toISOString());
  });

  it('should handle this 1', () => {
    const range = timeframe('this_1_day');
    assert.equal(range.start.toISOString(), moment().startOf('day').toISOString());
    assert.equal(range.end.toISOString(), moment().endOf('day').toISOString());
  });

  it('should handle this n', () => {
    const range = timeframe('this_3_days');
    assert.equal(range.start.toISOString(), moment().subtract(2, 'days').startOf('day').toISOString());
    assert.equal(range.end.toISOString(), moment().endOf('day').toISOString());
  });

  it('should handle today', () => {
    const range = timeframe('today');
    assert.equal(range.start.toISOString(), moment().startOf('day').toISOString());
    assert.equal(range.end.toISOString(), moment().endOf('day').toISOString());
  });

  it('should handle yesterday', () => {
    const range = timeframe('yesterday');
    assert.equal(range.start.toISOString(), moment().subtract(1, 'day').startOf('day').toISOString());
    assert.equal(range.end.toISOString(), moment().subtract(1, 'day').endOf('day').toISOString());
  });

  it('should handle unknown units', () => {
    assert.isNull(timeframe('this_5_donkies'));
  });

  it('should handle garbage', () => {
    assert.isNull(timeframe('garbage'));
  });

  it('should handle object', () => {
    assert.isNull(timeframe({}));
  });

  it('should return range unaltered', () => {
    const range = moment.range(moment(), moment());
    assert.equal(timeframe(range), range);
  })

});