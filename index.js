const moment        = require('moment-range').extendMoment(require('moment')),
      { DateRange } = require('moment-range');

const regex = /(previous|this)(?:_(\d+))?_(minute|day|hour|week|month|year)s?/;


module.exports = (timeframe) => {
  if (!timeframe) return timeframe;
  if (timeframe instanceof DateRange) return timeframe;
  if (typeof timeframe !== 'string' && !(timeframe instanceof String)) return null;
  const match = timeframe.match(regex);
  if (match) {
    const relative = match[1];
    let number = match[2];
    const units = match[3];
    const start = moment();
    const end = moment();

    if (relative === 'this') {
      if (number > 0) {
        number = number - 1;
      }
    } else {
      // previous
      end.subtract(1, units);
    }

    start.subtract(number, units).startOf(units);
    end.endOf(units);

    return moment.range(start, end);

  } else if (timeframe === 'today') {
    return moment.range(moment().startOf('day'), moment().endOf('day'));
  } else if (timeframe === 'yesterday') {
    const yesterday = moment().subtract(1, 'day');
    return moment.range(yesterday.clone().startOf('day'), yesterday.clone().endOf('day'));
  } else {
    return null;
  }
};