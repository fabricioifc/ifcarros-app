import { Reducer } from "redux";
import { CarState, CarTypes } from "./types";

const INITIAL_STATE: CarState = {
  data: [
    // {
    //   id: 1,
    //   ano: 2000,
    //   descricao: "teste",
    //   km: 544,
    //   marca: "Nissan",
    //   modelo: "Versa"
    // }
  ],
  error: false,
  loading: false
};

const reducer: Reducer<CarState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CarTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case CarTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data
      };
    case CarTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };
    default:
      return state;
  }
};

export default reducer;
