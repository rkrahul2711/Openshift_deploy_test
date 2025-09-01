import { combineReducers } from "redux"
import BatchDetails from "../dashboard/reducer"

/**
 * @fileoverview This file combines all the individual reducers into a single root reducer for the Redux store.
 * @author Sushma, Harshini, Sravani
 */
const rootReducer = combineReducers({
  BatchDetails,
})

export default rootReducer
