import times from 'lodash/times';

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getSampleData(count = 10, useCurrentDate) {
  return times(count, () => {
    const res = {
      value: getRandomInt(-100, 100),
      timestamp: useCurrentDate ? new Date().toString() : new Date(getRandomInt(0, Date.now())).toString()
    };
    return res;
  });
}
