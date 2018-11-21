/**
 * Main application file
 */

import config from './config/environment'
import Koa from 'koa'
import cors from 'koa2-cors'
import setConfig from './config/koa'
import setRouter from './router'

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const app = new Koa();
app.use(cors());
setConfig(app);
setRouter(app);

// Start server
// if (!module.parent) {
  app.listen(config.port, config.ip, function () {
    console.log('Koa server listening on %d, in %s mode', config.port, config.env);
  });
// }

// Expose app
export default app;