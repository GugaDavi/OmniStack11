import { Request, Response } from 'express';

import connection from '../database/connection';

class ProfileController {
  async index(req: Request, res: Response) {
    const ong_id = req.headers.authorization;

    const ongExist = await connection('ongs').where('id', ong_id).first();

    if (!ongExist) {
      return res.status(404).json({ error: 'Ong not found' });
    }

    const incidents = await connection('incidents')
      .where('ong_id', ong_id)
      .select('*');

    return res.json(incidents);
  }
}

export default new ProfileController();
