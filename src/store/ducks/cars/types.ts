export enum CarTypes {
  LOAD_REQUEST = "@cars/LOAD_REQUEST",
  LOAD_SUCCESS = "@cars/LOAD_SUCCESS",
  LOAD_FAILURE = "@cars/LOAD_FAILURE",
  UPDATE_FILTER =  "@cars/UPDATE_FILTER",
}

export interface Car {
  id: number;
  marca: string;
  modelo: string;
  ano: number;
  km: number;
  descricao: string;
  imagem: string;
}

export interface CarState {
  readonly data: Car[];
  readonly loading: boolean;
  readonly error: boolean;
  dataFilter: Car[];
}
