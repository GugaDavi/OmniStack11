/**
 * Data Types
 */

export interface IOng {
  id: string;
  name: string;
  email: string;
  whatsapp: string;
  city: string;
  uf: string;
}

export interface IIncidents {
  id: number;
  title: string;
  description: string;
  value: number;
}
