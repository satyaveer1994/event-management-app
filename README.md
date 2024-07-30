# Event Management Application - Backend

This is the backend for an event management application built with Node.js, Supabase, and MongoDB. The backend allows users to create, update, and manage events, track sessions, and integrate with an external API to fetch weather information for event locations. The backend is deployed on Render.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration and login using Supabase
- Secure storage of user information in MongoDB
- Create, read, update, and delete events
- Fetch and display weather information for event locations
- Track user sessions with login time, logout time, and IP address
- Rate limiting on email-related requests

## Tech Stack

- **Backend:** Node.js, Express.js, Supabase, MongoDB

- **External API:** Weather API for fetching weather information

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/satyaveer1994/event-management-app.git
   cd event-management-app
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Configuration

1. Create a `.env` file in the root directory and add the following environment variables:

   ```env
   SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_supabase_key
   MONGO_URI=your_mongodb_uri
   WEATHER_API_KEY=your_weather_api_key
   PORT=5000
   ```

2. Set up Supabase:

   - Create a Supabase project and obtain the URL and API key.
   - Enable email authentication in Supabase.

3. Set up MongoDB:

   - Create a MongoDB database and obtain the connection URI.

4. Obtain a Weather API key from a provider like OpenWeatherMap.

## Running the Application

1. Start the backend server:

   ```sh
   nodemon src/server.js
   ```

2. Access the application at `http://localhost:5000`.

## API Endpoints

### User Authentication

- **POST /register**: Register a new user.

  ```sh
   POST http://localhost:5000/auth/v1/signup -d '{"email": "test@example.com", "password": "password"}' -H "Content-Type: application/json"
  ```

- **POST /login**: Log in an existing user and create a session.
  ```sh
   POST http://localhost:5000/auth/v1/login -d '{"email": "test@example.com", "password": "password"}' -H "Content-Type: application/json"
  ```

### Event Management

- **POST /events**: Create a new event.

  ```sh
   POST http://localhost:5000/api/events -d '{"name": "Event 1", "date": "2024-08-01", "location": "New York", "description": "A sample event"}' -H "Content-Type: application/json"
  ```

- **GET /events**: Retrieve all events for the logged-in user.

  ```sh
   GET http://localhost:5000/api/events -H "Authorization: Bearer <token>"
  ```

- **PUT /events/:id**: Update an event by ID.

  ```sh
   PUT http://localhost:5000/api/events/<event_id> -d '{"name": "Updated Event"}' -H "Content-Type: application/json" -H "Authorization: Bearer <token>"
  ```

- **DELETE /events/:id**: Delete an event by ID.
  ```sh
   DELETE http://localhost:5000/api/events/<event_id> -H "Authorization: Bearer <token>"
  ```

### Session Management

- **GET /sessions**: Retrieve all user sessions.
  ```sh
   GET http://localhost:5000/api/sessions -H "Authorization: Bearer <token>"
  ```

### Weather Information

- **GET /weather/:location**: Fetch weather information for a given location.
  ```sh
  curl -X GET http://localhost:5000/api/weather/New%20York
  ```

## Error Handling

Error handling is implemented to provide appropriate responses for different scenarios, such as:

- Invalid user credentials
- Rate limit exceeded
- Server errors

For example, rate limit errors are handled in the middleware and controllers to return a `429 Too Many Requests` response.

## Deployment

1. Deploy the backend on Render:
   - Follow the Render deployment guide to deploy the backend.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for review.

## License

This project is licensed under the MIT License.
