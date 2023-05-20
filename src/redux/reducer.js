import * as types from "./actionTypes";

const initialState = {
  isProcessing: false,
  isFailed: false,
  isFailedMessage: "",
  data: [],
  capsuleSerialArray:[],
  capsuleStatusArray:[]
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_FILTERED_DATA_PROCESS:
      return {
        ...state,
        isProcessing: true,
        isFailed: false,
        isFailedMessage: "",
        data: [],
        capsuleSerialArray:[],
        capsuleStatusArray:[]
      };
    case types.GET_FILTERED_DATA_SUCCESS:
      console.log(payload)
      return {
        ...state,
        isProcessing: false,
        isFailed: false,
        isFailedMessage: "",
        data: payload.data,
        capsuleSerialArray:payload.capsuleSeries,
        capsuleStatusArray:payload.capsuleStatus

      };
    case types.GET_FILTERED_DATA_FAILURE:
      return {
        ...state,
        isProcessing: false,
        isFailed: true,
        isFailedMessage: "Somthing Went Wrong!",
        data: []
      };
    default:
      return state;
  }
};