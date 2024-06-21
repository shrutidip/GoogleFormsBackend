# GoogleFormsBackend
This backend server is built with Express.js and TypeScript, serving as the data storage and API provider for the Submission Manager Windows Desktop Application. It uses a JSON file (`db.json`) as the database to store submissions.

# Backend for Submission Manager Application

This backend server is built with Express.js and TypeScript, serving as the data storage and API provider for the Submission Manager Windows Desktop Application. It uses a JSON file (`db.json`) as the database to store submissions.

## Features

1. **Ping Endpoint**
   - GET request that always returns `true` to verify server availability.

2. **Submit Endpoint**
   - POST request to save new form submissions with parameters `name`, `email`, `phone`, `github_link`, and `stopwatch_time`.

3. **Read Endpoint**
   - GET request with a query parameter `index` to retrieve a specific form submission by its index.

4. **Delete Endpoint**
   - DELETE request with a query parameter `id` to delete a submission by its ID.

5. **Update Endpoint**
   - PUT request with a query parameter `id` to update an existing submission.

6. **Search Endpoint**
   - GET request with a query parameter `email` to search for submissions by email ID.

## Prerequisites

- Node.js installed on your machine.
- npm or yarn package manager.
- TypeScript compiler (`tsc`) for compiling TypeScript to JavaScript.
- `express`, `body-parser`, and other required npm packages installed.
