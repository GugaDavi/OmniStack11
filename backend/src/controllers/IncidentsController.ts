import { Request, Response } from 'express';

import connection from '../database/connection';

class IncidentsController {
  async index(req: Request, res: Response) {
    const { page = 1 } = req.query;

    const incidents = await connection('incidents')
      .join('ongs', 'incidents.ong_id', '=', 'ongs.id')
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf',
      ]);

    return res.json(incidents);
  }

  async store(req: Request, res: Response) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;

    const ong = await connection('ongs').where('id', ong_id).first();

    if (!ong) {
      return res.status(404).json({ error: 'Ong was not found' });
    }

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id,
    });

    return res.json({ id });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;

    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first();

    if (!incident) {
      return res.status(404).json({ error: 'Incident not found' });
    }

    if (incident.ong_id !== ong_id) {
      return res.status(401).json({ error: 'Not Authorized' });
    }

    await connection('incidents').where('id', id).delete();

    return res.json({ ok: 'Ong was deleted with success' });
  }
}

export default new IncidentsController();
