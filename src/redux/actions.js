import axios from "axios";
import * as types from "./actionTypes";

// apply filters
const applyFilters = (status, type, capsule_serial) => async (dispatch) => {
  // when we process
  dispatch({ type: types.GET_FILTERED_DATA_PROCESS });

  try {
    // make get request
    const res = await axios.get(
      `https://api.spacexdata.com/v3/capsules?status=${status}&type=${type}&capsule_serial=${capsule_serial}`
    );

    const uniqueCapsuleName = [...new Set(res.data.flatMap(capsule => capsule.capsule_serial))];
    const uniqueCapsuleStatus = [...new Set(res.data.flatMap(capsule => capsule.status))];


    // dispatch if request success
    dispatch({
      type: types.GET_FILTERED_DATA_SUCCESS,
      payload: {
        data:res.data,
        capsuleSeries:uniqueCapsuleName,
        capsuleStatus:uniqueCapsuleStatus
    },
    });
  } catch (err) {
    // dispatch if request failed
    dispatch({
      type: types.GET_FILTERED_DATA_FAILURE,
      payload: "Somthing Went Wront",
    });
  }
};

export { applyFilters };