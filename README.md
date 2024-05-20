# Sleep Tracker API

## Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file with the following contents:
    ```
    MONGODB_URI="your mongodb URI"
    MONGODB_URI_TEST="your test mongodb URI"
    PORT="port where backend is running"
    ```
4. Start the server with `npm start`.

## Endpoints

### POST `/sleep`

Creates a new sleep record.

- **Request:**
  - Body: `{ "userId": "user1", "hours": 8, "timestamp": "2023-05-18T10:00:00Z" }`

- **Response:**
  - `201 Created`: `{ "_id": "60a6c45b21ab9d28e8d8f1f1", "userId": "user1", "hours": 8, "timestamp": "2023-05-18T10:00:00Z" }`

### GET `/sleep/:userId`

Retrieves all sleep records for a user, sorted by timestamp.

- **Response:**
  - `200 OK`: `[ { "_id": "60a6c45b21ab9d28e8d8f1f1", "userId": "user1", "hours": 8, "timestamp": "2023-05-18T10:00:00Z" } ]`

### DELETE `/sleep/:recordId`

Deletes a sleep record by ID.

- **Response:**
  - `204 No Content`

## Testing

To run the tests, add the following script to your `package.json`:

```json
"scripts": {
  "test": "mocha"
}
