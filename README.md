# Lead Priority Tool 🚀

A full-stack web application that helps users create, manage, and prioritize business leads based on an automated lead scoring system.

## Live Demo

Frontend: Add your Vercel deployment link here

Backend API: Add your Render deployment link here

## Features

- Create new business leads
- Automatically calculate lead scores
- Assign High, Medium, or Low priority
- View lead score reasons
- Search leads by company name
- Filter leads by priority
- View lead statistics
- Responsive user interface

## Lead Scoring

The application calculates a lead score based on the following factors:

- Industry
- Company size
- Website availability
- Location availability

Based on the final score, leads are categorized as:

- High Priority
- Medium Priority
- Low Priority

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Axios

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv

## Project Structure

```text
lead-priority-tool/
│
├── frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── LeadForm.jsx
│   │   │   ├── LeadTable.jsx
│   │   │   ├── LeadStats.jsx
│   │   │   └── PriorityBadge.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── vercel.json
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   └── leadController.js
│   │
│   ├── models/
│   │   └── Lead.js
│   │
│   ├── routes/
│   │   └── leadRoutes.js
│   │
│   ├── utils/
│   │   └── calculateLeadScore.js
│   │
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
│
├── .gitignore
└── README.md
```

## Installation

### Clone the repository

```
git clone <your-repository-url>
cd lead-priority-tool
```

## Backend Setup
Go to the backend folder:

```
cd backend
```
Install dependencies:

```
npm install
```
Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```
Start the backend:

```
npm run dev
```
The backend will run on:

```
http://localhost:5000
```

## Frontend Setup
Open another terminal and go to the frontend folder:

```
cd frontend
```
Install dependencies:

```
npm install
```
Start the frontend:

```
npm run dev
```
The frontend will run on the URL provided by Vite, usually:

```
http://localhost:5173
```

## API Endpoints

### Create a Lead

```
POST /api/leads
```
Example request:

```
{
  "companyName": "Tech Company",
  "website": "https://example.com",
  "industry": "Technology",
  "companySize": 120,
  "location": "Kolkata"
}
```

### Get All Leads

```
GET /api/leads
```

### Search Leads

```
GET /api/leads?search=Tech
```

### Filter Leads by Priority

```
GET /api/leads?priority=High
```

## Key Technical Decisions

- Separated the frontend and backend for better project organization
- Used a model, controller, and routes structure in the backend
- Kept the lead scoring logic in a separate utility function
- Used reusable React components for the user interface
- Used MongoDB for lead data storage
- Kept the project focused without unnecessary features or libraries

## Author
Sanjiv Kumar Patel
