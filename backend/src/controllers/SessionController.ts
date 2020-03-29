import { Request, Response } from 'express';

import connection from '../database/connection';
import { IOng } from './types';

class SessionController {
  async store(req: Request, res: Response) {
    const { id } = req.body;

    const ong = await connection<IOng>('ongs').where('id', id).first();

    if (!ong) {
      return res.status(404).json({ error: 'Ong not found' });
    }

    return res.json(ong);
  }
}

export default new SessionController();
