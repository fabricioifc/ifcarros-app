import { action } from "typesafe-actions";
import { CarTypes, Car } from "./types";

export const loadRequest = () => action(CarTypes.LOAD_REQUEST);
export const loadSuccess = (data: Car[]) =>
  action(CarTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(CarTypes.LOAD_FAILURE);
export const updateFilter = (data: Car[]) => action(CarTypes.UPDATE_FILTER, {data});
