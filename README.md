# Event Planner Backend

A RESTful API backend for an event planning application built with Node.js, Express.js, and MongoDB.

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/) account and cluster (or local MongoDB installation)

## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd event-planner/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## ⚙️ Environment Setup

1. Create a `.env` file in the root directory (optional - currently using hardcoded connection string)
2. Update the MongoDB connection string in `index.js` with your own database URL:
   ```javascript
   const url = "your-mongodb-connection-string-here";
   ```

**Note**: For security, consider moving the database URL to environment variables.

## 🏃‍♂️ Running the Application

### Development Mode
```bash
npm start
```
You should see the following messages:
- "Connected to database!"
- "Server is running on port 5000"

## 🔗 API Endpoints

Base URL: `http://localhost:5000/api/events`

### Get All Events
- **GET** `/api/events`
- **Description**: Retrieve all events
- **Query Parameters**: 
  - `category` (optional): Filter events by category (`personal`, `work`, `others`)

### Create Event
- **POST** `/api/events`
- **Description**: Create a new event
- **Request Body**:
  ```json
  {
    "title": "Event Title",
    "description": "Event Description",
    "date": "2025-12-31T23:59:59.000Z",
    "category": "personal"
  }
  ```

### Update Event
- **PUT** `/api/events/:id`
- **Description**: Update an existing event
- **Parameters**: `id` - Event ID
- **Request Body**: Same as create event

### Delete Event
- **DELETE** `/api/events/:id`
- **Description**: Delete an event
- **Parameters**: `id` - Event ID

## 📊 Data Models

### Event Schema
```javascript
{
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['personal', 'work', 'others']
  }
}
```

## 📁 Project Structure

```
backend/
├── controllers/
│   └── events.js          # Event controller logic
├── model/
│   └── event.js           # Event model and validation
├── routes/
│   └── events.js          # Event routes
├── index.js               # Main application file
├── package.json           # Project dependencies
└── README.md             # Project documentation
```
