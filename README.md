# Bamboo Aura Website

A full-stack website built with React.js and Tailwind CSS for the frontend, and Node.js, Express, and MongoDB for the backend.

## Features
- Home, About, and Contact pages
- Contact form with backend API
- Tailwind CSS for UI design
- MongoDB for storing contact messages

## Project Structure
```
bamboo-aura-website/
├── client/       # Frontend (React.js + TailwindCSS)
└── server/       # Backend (Node.js + Express + MongoDB)
```

## Setup Instructions

### Prerequisites
- Node.js and npm
- MongoDB

### Backend Setup
```bash
cd server
npm install
cp .env.example .env
# Edit .env and set MONGO_URI and PORT
npm start
```

### Frontend Setup
```bash
cd client
npm install
npm run dev
```

### Deployment
You can deploy:
- Frontend on Vercel or Netlify
- Backend on Render or Railway
- MongoDB on MongoDB Atlas

## Author
Created by [Your Name] for Bamboo Aura.