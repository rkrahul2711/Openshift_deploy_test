// import { getIdToken } from "sso/Instance"

/**
 * Constructs headers for API requests.
 * @returns {Object} An object containing necessary headers for API requests.
 */
export const getHeaders = async () => {
  // const idtoken = await getIdToken()
  return {
    // authorization: idtoken,
    "Content-Type": "application/json",
  }
}

/**
 * Formats API response and handles errors.
 * @param {Response} apiResponse - The response from the API.
 * @returns {Object} An object containing success status, data, and error information.
 */
export const responseFormatter = async apiResponse => {
  if (!apiResponse.ok) {
    // logout
    if (apiResponse.status === 440) {
      localStorage.clear()
      sessionStorage.clear()
      window.location.reload()
    }

    return {
      success: false,
      data: null,
      error: {
        message: `An error has occured: ${apiResponse.status}`,
      },
    }
  }

  const data = await apiResponse.json()

  return {
    success: true,
    data: data,
    error: null,
  }
}
