# Timeframe

Parses a Keen.IO-style [relative timeframe](https://keen.io/docs/api/#relative-timeframes) into a [moment range](https://github.com/rotaready/moment-range).

[![Build Status](https://travis-ci.org/activeprospect/timeframe.svg?branch=master)](https://travis-ci.org/activeprospect/timeframe)

### Installation

```bash
npm install @activeprospect/timeframe --save
```

### Usage

This library parses a relative timeframe string into a moment range:

```javascript
const timeframe = require('@activeprospect/timeframe');

const range = timeframe('previous_2_days');

console.log(range);
// =>
// { [Number: 172799999]
//   start: moment("2017-10-24T00:00:00.000"),
//   end: moment("2017-10-25T23:59:59.999") }

```