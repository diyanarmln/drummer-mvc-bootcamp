import db from './models/index.mjs';

// import your controllers here

import initDrummersController from './controllers/drummers.mjs';
import initReservationsController from './controllers/reservations.mjs';

export default function bindRoutes(app) {
  // initialize the controller functions here
  // pass in the db for all callbacks

  const drummersController = initDrummersController(db);
  const reservationsController = initReservationsController(db);

  // define your route matchers here using app

  app.get('/drummer/:id', drummersController.findOne);

  app.post('/reservation/:drummer_id', reservationsController.create);

  app.get('/reservations/:drummer_id', reservationsController.index);

  app.get('/', drummersController.index);
}
