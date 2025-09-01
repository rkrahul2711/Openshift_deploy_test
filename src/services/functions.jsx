import { Tooltip } from "antd"
import { getHeaders } from "./utilService"
const  REACT_APP_BASE_URL  = import.meta.env.VITE_BASE_URL


/**
 * Fetch data from a given URL with the provided email
 * @author Sushma
 * @param {string} url - The endpoint URL
 * @param {string} email - The user's email for headers
 * @returns {Promise<object|null>} - The JSON response or null if error occurs
 */
export const fetchData = async (url, id) => {
  try {
    const headers = await getHeaders();

    // If id is provided, append it as query param
    const finalUrl = id 
      ? `${import.meta.env.VITE_BASE_URL}/${url}/${id}` 
      : `${import.meta.env.VITE_BASE_URL}/${url}`;

    const response = await fetch(finalUrl, {
      method: "GET",
      headers: { ...headers },
    });

    return response.json();
  } catch (error) {
    console.error("Error occurred:", error);
    return null;
  }
};

/**
 * Post data to a given URL with the provided data
 * @author Sushma
 * @param {string} url - The endpoint URL
 * @param {object} data - The data to be sent in the request body
 * @returns {Promise<object|null>} - The JSON response or null if error occurs
 */
export const PostData = async (url, data,asBlob ) => {
  try {
    const headers = await getHeaders()
    // Make the POST request with the email and idToken in the headers
    const response = await fetch(`${REACT_APP_BASE_URL}/${url}`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data), // Send the rest of the data in the body
    })

    // Parse and return the JSON response from the server
   return asBlob ? response.blob() : response.json();
  } catch (error) {
    console.error("Error occurred:", error)
    return null
  }
}
/**
 * @function PostFileData
 * @description Uploads a file by making a POST request to the specified URL.
 * @author Sushma
 * @param {string} url - The endpoint URL for the file upload.
 * @param {FormData} data - The file data to be sent in the request body.
 * @returns {Promise<object|null>} - The JSON response from the server or null if an error occurs.
 */

/**
 * Delete data from a given URL with the provided data
 * @author Sushma
 * @param {string} url - The endpoint URL
 * @param {object} data - The data required to delete (usually identifying information)
 * @returns {Promise<object|null>} - The JSON response or null if error occurs
 */
export const DeleteData = async (url, data) => {
  try {
    const headers = await getHeaders()
    const response = await fetch(`${REACT_APP_BASE_URL}/${url}`, {
      method: "Delete",
      headers: headers,
      body: JSON.stringify(data),
    })

    return response.json()
  } catch (error) {
    console.error("Error occurred:", error)
    return null
  }
}

/**
 * Generate columns for a table based on dynamic headers and data
 * @author Sushma
 * @param {Array<string>} dynamicHeaders - The headers for the table
 * @param {Array<object>} data - The data set for the table
 * @returns {Array<object>} - An array of column configurations
 */
// export const generateColumns = (dynamicHeaders, data) => {
//   const columns = dynamicHeaders
//     .filter(header =>
//       data.some(item => item[header] !== undefined && item[header] !== null),
//     )
//     .map(header => ({
//       title: header,
//       dataIndex: header,
//       key: header,
//       sorter: (a, b) => {
//         const valueA = a[header]
//         const valueB = b[header]

//         // Check if both values are numbers
//         if (!isNaN(valueA) && !isNaN(valueB)) {
//           return valueA - valueB
//         }

//         // Check if both values are date strings
//         const dateA = Date.parse(valueA)
//         const dateB = Date.parse(valueB)
//         if (!isNaN(dateA) && !isNaN(dateB)) {
//           return dateA - dateB
//         }

//         // Fallback to string comparison
//         return valueA.localeCompare(valueB)
//       },
//       render: text => (
//         <Tooltip title={typeof text === "number" ? addCommas(text) : text}>
//           <div
//             style={{
//               maxWidth: "350px",
//               overflow: "hidden",
//               textOverflow: "ellipsis",
//               whiteSpace: "nowrap",
//               textAlign: typeof text === "number" ? "right" : "left", // Right-align numeric values
//             }}
//           >
//             {typeof text === "number"
//               ? "$" + formatCurrency(Number(text))
//               : typeof text === "date"
//                 ? StartDate(text)
//                 : text?.length > 16
//                   ? text?.slice(0, 15) + "..."
//                   : text?.slice(0, 15)}
//           </div>
//         </Tooltip>
//       ),
//     }))

//   return columns
// }
