import { Request, Response, NextFunction } from 'express';
import * as Yup from 'yup';

import { IOng } from '../controllers/types';

class OngValidator {
  async store(req: Request, res: Response, next: NextFunction) {
    const schema: Yup.Schema<IOng> = Yup.object().shape({
      id: Yup.string(),
      name: Yup.string().required(),
      email: Yup.string().required(),
      whatsapp: Yup.string().required(),
      city: Yup.string().required(),
      uf: Yup.string().required(),
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

export default new OngValidator();
