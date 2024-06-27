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
    "id": "string",             // Unique identifier for the event
    "eventName": "string",      // Name of the event
    "eventDate": "Date",        // Date of the event
    "organizer": "string",      // Organizer's name
    "email": "string",          // Email of the organizer
    "phone": "string",          // Phone number of the organizer
    "location": {
        "street": "string",     // Venue street address
        "city": "string",       // Venue city
        "state": "string",      // Venue state
        "zip": "string"         // Venue zip code
    },
    "createdAt": "Date",        // Timestamp when the event was created
    "updatedAt": "Date"         // Timestamp when the event was last updated
}

