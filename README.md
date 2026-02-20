# Student Registration Form – Node.js and MongoDB

A simple full-stack student registration system built using Node.js, Express and MongoDB. 

# Screenshots



# Features
- Student registration form (Name, Email, Age, Course)
- Backend API using Express.js
- MongoDB database integration using Mongoose
- Clean folder structure (public and models separation)
- Modern popup modal for user feedback
- Error handling using try–catch


# Technologies Used
- HTML5, CSS3
- JavaScript (ES6)
- Node.js
- Express.js
- MongoDB
- Mongoose

# Project Structure
form-demo/
│
├── models/
│ └── Student.js
│
├── public/
│ ├── index.html
│ └── style.css
│
├── .gitignore
├── package.json
├── package-lock.json
└── server.js

# How to Run This Project (Step-by-Step)

#1️ Prerequisites
Make sure the following are installed:
- Node.js
- MongoDB (local or MongoDB Compass)

#2 Clone the Repository
bash git clone <https://github.com/PRIYANKA00K/student-form-mongodb/tree/main>
cd form-demo

#3 Install Dependencies
npm install // This installs all required packages listed in package.json.

#4 Start MongoDB
Start MongoDB service
OR
Open MongoDB Compass (this automatically starts MongoDB)

#5 Run the Server
node server.js

If successful, you will see:

MongoDB connected
Server running on http://localhost:3000

#6 Open in Browser
Go to: http://localhost:3000
Fill the form → Submit → Data is stored in MongoDB

# Database Verification
Open MongoDB Compass and check the studentDB database to view stored student records.

Notes
node_modules is excluded using .gitignore
MongoDB runs on mongodb://your's IP/studentDB
This project is for learning full-stack fundamentals

Users can run the project by installing dependencies using npm install, starting MongoDB, running node server.js and accessing the app via localhost:3000.

👤 Author
Priyanka R
