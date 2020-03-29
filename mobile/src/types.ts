export interface IIncident {
  id: number;
  title: string;
  description: string;
  value: number;
  ong_id: string;
  name: string;
  email: string;
  whatsapp: string;
  city: string;
  uf: string;
}

export type RootStackParamList = {
  Home: undefined;
  IncidentsDatails: { item: IIncident };
};
