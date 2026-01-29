# Suraksha Sahyog Kendra (SSK) - Rishitha Portfolio Project

This is a full-stack web application with a React frontend and FastAPI backend.

## Project Structure
- **frontend/**: React application (Bootstrapped with Create React App)
- **backend/**: FastAPI application

## Running Locally

### Prerequisites
- Node.js (v18+)
- Python (v3.10+)
- MongoDB (running locally or URI provided in `.env`)

### Setup and Run
1. **Backend**:
   ```bash
   cd backend
   pip install -r requirements.txt
   uvicorn server:app --reload --port 8000
   ```

2. **Frontend**:
   ```bash
   cd frontend
   npm install
   npm start
   ```

## Publishing to GitHub Pages (Frontend)
This project is configured to deploy the frontend to GitHub Pages.

1. Updates `package.json` with your GitHub repository URL:
   ```json
   "homepage": "https://<username>.github.io/<repository-name>"
   ```
2. Deploy:
   ```bash
   cd frontend
   npm run deploy
   ```
