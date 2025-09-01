import {
  SELECTED_FILTER,
} from "./actionTypes"

const INIT_STATE = {
  
  filterList: {
    country: "",
    wasteLevel1: "All",
    wasteLevel2: "All",
    area: "All",
    businessGroup: "All",
    interventionBucket: "All",
    simulation: "All",
  },
  error: {},
}

const BatchDetails = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SELECTED_FILTER:
      return {
        ...state,
        filterList: action.payload,
      }
    default:
      return state
  }
}

export default BatchDetails
