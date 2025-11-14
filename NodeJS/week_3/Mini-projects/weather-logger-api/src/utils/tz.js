export function formatWithTZ(isoString, tz = 'Africa/Casablanca') {
  try {
    const dt = new Date(isoString);
    return new Intl.DateTimeFormat('en-CA', { timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit', hour:'2-digit', minute:'2-digit', second:'2-digit' }).format(dt);
  } catch (e) {
    return isoString;
  }
}
