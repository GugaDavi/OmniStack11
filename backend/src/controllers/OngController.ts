import { Request, Response } from 'express';
import crypto from 'crypto';

import connection from '../database/connection';
import { IOng } from './types';

class OngController {
  async index(req: Request, res: Response) {
    const ongs = await connection<IOng>('ongs').select('*');

    return res.json(ongs);
  }

  async store(req: Request, res: Response) {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return res.json({ id });
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;

    const ong = await connection<IOng>('ongs').where('id', id).first();

    if (!ong) {
      return res.status(404).json({ error: 'Ong not found' });
    }

    await connection('ongs').where('id', id).update(req.body);

    return res.json({ ok: 'Ong was updated' });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    const ong = await connection<IOng>('ongs').where('id', id).first();

    if (!ong) {
      return res.status(404).json({ error: 'Ong not found' });
    }

    await connection('ongs').where('id', id).delete();

    return res.json({ ok: 'Ong was deleted' });
  }
}

export default new OngController();
