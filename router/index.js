/**
 * Main application routes
 */
import _root from './root';

export default function(app) {

  // YEOMAN INJECT ROUTES BELOW
  app.use(_root.routes())
  app.use(_root.allowedMethods())

};
