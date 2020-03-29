export interface IOng {
  id: string;
  name: string;
  email: string;
  whatsapp: string;
  city: string;
  uf: string;
}

export interface IIncident {
  id: number;
  title: string;
  description: string;
  value: number;
  ong_id: number;
}
