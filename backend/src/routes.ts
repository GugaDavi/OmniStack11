import { Router } from 'express';

import OngController from './controllers/OngController';
import IncidentsController from './controllers/IncidentsController';
import SessionController from './controllers/SessionController';
import ProfileController from './controllers/ProfileController';

import OngValidator from './validators/OngValidatior';
import IncidentValidator from './validators/IncidentValidator';

const routes = Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngValidator.store, OngController.store);
routes.put('/ongs/:id', OngController.update);
routes.delete('/ongs/:id', OngController.delete);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentValidator.store, IncidentsController.store);
routes.delete('/incidents/:id', IncidentsController.delete);

routes.get('/profile', ProfileController.index);

routes.post('/session', SessionController.store);

export default routes;
