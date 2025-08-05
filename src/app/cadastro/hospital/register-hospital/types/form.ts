export interface FormData {
  nome: string;
  endereco: {
    rua: string;
    numero: string;
    complemento?: string;
    bairro: string;
    cidade: string;
    pontoReferencia?: string;
  };
  status: 'ativo' | 'inativo' | 'pendente';
}