/**
 * @fileoverview Handles API requests for AI suggestions, registered interventions, and
 * Design to Distribute (D2D) waste overview related to height loss and package density loss.
 * @author Sushma
 */
import { fetchData, PostData, } from "./functions"

/**
 * @function getFilterList
 * @description Fetches the list of filters for the AI suggestions page.
 * @param {Object} data - The payload for the filter request.
 * @returns {Promise<Object>} The filter list data.
 */

// Dashboard Page
export const getFilterList = async data => {
  try {
    const dataDetails = await PostData(`dashboard/filter`, data)
    return dataDetails
  } catch (error) {
    console.error("Error get Batch Details: ", error)
  }
}


export const getBatchList = async data => {
  try {
    const dataDetails = await PostData(`dashboard/reviewInfo`, data)
    return dataDetails
  } catch (error) {
    console.error("Error get Batch Details: ", error)
  }
}

export const getKPICards = async data => {
  try {
    const dataDetails = await PostData(`dashboard/kpisInfo`, data)
    return dataDetails
  } catch (error) {
    console.error("Error get Batch Details: ", error)
  }
}

// Batch detail Page
export const getBatchDetails = async data => {
  try {
    const dataDetails = await fetchData(`batch`,data)
    return dataDetails
  } catch (error) {
    console.error("Error get Batch Details: ", error)
  }
}

export const getBatchDetailsTable = async data => {
  try {
    const dataDetails = await PostData(`batch/table`, data)
    
    return dataDetails
  } catch (error) {
    console.error("Error get Batch Details: ", error)
  }
}
export const getBatchView = async data => {
  try {
    const dataDetails = await PostData(`batch/view`, data,true)
    return dataDetails
  } catch (error) {
    console.error("Error get Batch Details: ", error)
  }
}

export const getBatchDownload = async data => {
  try {
    const dataDetails = await PostData(`batch/download`, data,true)
    return dataDetails
  } catch (error) {
    console.error("Error get Batch Details: ", error)
  }
}

