# Task Management System

A simple Task Management System that allows users to create, view, update, and delete tasks. The system consists of a Node.js backend with a RESTful API and a React frontend styled with Tailwind CSS.

---

## **Features**
- **Frontend**: React with Tailwind CSS
  - Add new tasks.
  - View all tasks in a list.
  - Edit task status (Pending/Completed).
  - Delete tasks.
- **Backend**: Node.js with MongoDB (using Mongoose)
  - RESTful APIs for CRUD operations.

---

## **Project Structure**
### Backend
- **Technologies**: Node.js, Express, MongoDB, Mongoose
- **APIs**:
  - `POST /api/tasks`: Create a new task.
  - `GET /api/tasks`: Retrieve all tasks.
  - `PUT /api/tasks/:id`: Update a task by ID.
  - `DELETE /api/tasks/:id`: Delete a task by ID.

### Frontend
- **Technologies**: React, Axios, Tailwind CSS
- **Components**:
  - `TaskForm`: Add new tasks.
  - `TaskList`: Display tasks.
  - `TaskItem`: Display individual task with actions.

---

## **Prerequisites**
- Node.js (v14+)
- npm (v6+)
- MongoDB instance (local or cloud)

---

## **Setup Instructions**

### **Backend Setup**
1. **Navigate to the backend directory**:
   ```bash
   cd backend
```


## **Install dependencies:**
```
bash
Copy code
npm install
```
Configure environment variables: Create in the backend directory with the following variables:

```
Copy code
PORT=5000
MONGO_URI=<your-mongodb-uri>
```
Run the backend server:
```
bash
Copy code
npm run dev
```
The server will start on http://localhost:5000.

## Frontend Setup
Navigate to the frontend directory:
```
bash
Copy code
cd frontend
```
Install dependencies:
```
bash
Copy code
npm install
```

Configure Tailwind CSS:

Ensure tailwind.config.js is properly set up:
```
javascript
Copy code
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Add Tailwind imports to src/index.css:
```
css
Copy code
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Run the frontend development server:
```
bash
Copy code
npm start
```
The app will run on http://localhost:3000.

Running the Project
Start the backend server:
```
bash
Copy code
cd backend
npm run dev
```
Start the frontend React app:
```
bash
Copy code
cd frontend
npm start
```
Access the application at http://localhost:3000.

# Project Scripts
## Backend
npm start: Start the backend server.
npm run dev: Start the backend server in development mode with nodemon.
## Frontend
npm start: Start the React development server.
npm run build: Build the project for production.
## API Endpoints
Base URL: http://localhost:5000/api/tasks
## Endpoints:
POST /tasks: Create a task.
GET /tasks: Fetch all tasks.
PUT /tasks/:id: Update a task by ID.
DELETE /tasks/:id: Delete a task by ID.
## Screenshots
Task Form: Add new tasks.
Task List: View all tasks with status and actions.
Task Edit/Delete: Update or remove tasks.
## Technologies Used
Frontend: React, Tailwind CSS, Axios
Backend: Node.js, Express.js, MongoDB, Mongoose
Tools: nodemon, Postman (for testing APIs)
## Contributing
Feel free to fork this repository and submit pull requests to contribute to the project.

## License
This project is licensed under the MIT License.


---

### **Instructions Recap**
This README includes setup instructions, project features, prerequisites, scripts, and API details. Let me know if further customizations or additions are required!
