import EventEmitter from 'events';
const logger = new EventEmitter();

// simple console listeners, could be extended to file or external system
logger.on('request:received', (payload) => {
  console.log('[event] request:received', payload);
});
logger.on('response:sent', (payload) => {
  console.log('[event] response:sent', payload);
});
logger.on('export:completed', (payload) => {
  console.log('[event] export:completed', payload);
});

export default logger;
