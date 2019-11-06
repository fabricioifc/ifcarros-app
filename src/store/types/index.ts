export enum CarTypes {
  LOAD_REQUEST = "@cars/LOAD_REQUEST",
  LOAD_SUCCESS = "@cars/LOAD_SUCCESS",
  LOAD_FAILURE = "@cars/LOAD_FAILURE"
}

export interface Car {
  id: number;
  marca: string;
  modelo: string;
  ano: number;
  km: number;
  descricao: string;
}

export interface CarState {
  readonly data: Car[];
  readonly loading: boolean;
  readonly error: boolean;
}
