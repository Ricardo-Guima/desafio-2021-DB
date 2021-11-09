export interface Ceps {
  id: number;
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export const ceps = [
  {
    id: 1,
    cep: '94853250',
    logradouro: 'Estrada Frederico Dihl',
    complemento: '',
    bairro: 'Bela Vista',
    localidade: 'Alvorada',
    uf: 'RS',
  },
  {
    id: 2,
    cep: '95625000',
    logradouro: 'Rua Caxias',
    complemento: '',
    bairro: 'Centro',
    localidade: 'Imbé',
    uf: 'RS',
  },
  {
    id: 3,
    cep: '94030001',
    logradouro: 'Av. Dorival Cândido Luz de Oliveira',
    complemento: '',
    bairro: 'Centro',
    localidade: 'Gravatai',
    uf: 'RS',
  },
];

