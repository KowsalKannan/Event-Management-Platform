# Event Management Platform

This is a basic Event Management Platform (EMP) built using Node.js and TypeScript. It supports the following operations:
- Add a new event
- Update an existing event
- Delete an event
- Retrieve an event by its ID
- List all events

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the server: `npm run dev`

## API Endpoints

- `POST /events`: Add a new event
- `PUT /events/:id`: Update an existing event
- `DELETE /events/:id`: Delete an event
- `GET /events/:id`: Retrieve an event by its ID
- `GET /events`: List all events

## Event Object Structure

```json
{
  "id": "string",
  "eventName": "string",
  "eventDate": "Date",
  "organizer": "string",
  "email": "string",
  "phone": "string",
  "location": {
    "street": "string",
    "city": "string",
    "state": "string",
    "zip": "string"
  },
  "createdAt": "Date",
  "updatedAt": "Date"
}
