export function cToF(c) {
  return c * 9/5 + 32;
}

export function convertUnits(record, units='metric') {
  if (units === 'imperial') {
    return {
      ...record,
      tempF: Number((cToF(record.tempC)).toFixed(2)),
      units: 'imperial'
    };
  }
  return { ...record, units: 'metric' };
}
