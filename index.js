/**
 * Converts JSON data to CSV format.
 *
 * @param {Array} jsonArray - The JSON array to convert. Should be an array of objects.
 * @param {boolean} includeHeaders - Whether to include headers in the CSV output. Defaults to true.
 * @returns {string} The CSV representation of the JSON data.
 */
 async function jsonToCSV(jsonArray, includeHeaders = true) {
    if (!Array.isArray(jsonArray) || jsonArray.length === 0) {
        throw new Error("Invalid input: Expected a non-empty array of objects.");
    }

    const headers = Object.keys(jsonArray[0]);
    const csvRows = jsonArray.map(row =>
        headers.map(header => JSON.stringify(row[header], (key, value) => value ?? '')).join(',')
    );

    if (includeHeaders) {
        csvRows.unshift(headers.join(','));
    }

    return csvRows.join('\n');
}

module.exports = { jsonToCSV };
