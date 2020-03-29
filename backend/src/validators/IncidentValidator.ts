import { Request, Response, NextFunction } from 'express';
import * as Yup from 'yup';

import { IIncident } from '../controllers/types';

class IncidentValidator {
  async store(req: Request, res: Response, next: NextFunction) {
    const schema: Yup.Schema<IIncident> = Yup.object().shape({
      id: Yup.number(),
      title: Yup.string().required(),
      description: Yup.string().required(),
      value: Yup.number().required(),
      ong_id: Yup.number(),
    });

    try {
      await schema.validate(req.body);
      return next();
    } catch (e) {
      const error: Yup.ValidationError = e;
      res.status(400).json({ error: error.message });
    }
  }
}

export default new IncidentValidator();
