Blog Management System API - README

Introduction

The Blog Management System API is a RESTful API developed for managing a blogging platform. It includes features such as user authentication, role-based access control, and blog and comment management. The API is built using Express.js with MongoDB as the database and includes email verification, user roles (Admin, Editor, User), and deployment-ready capabilities.

Features

User Management

Signup and Login with authentication (JWT).

Email verification after signup (bonus).

Role-based access control:

Admin: Manage all blogs and assign blogs to Editors.

Editor: Edit assigned blogs.

User: View blogs and manage personal comments.

Blog Management

Create, edit, and delete blogs.

Role-based restrictions on blog creation and editing.

Assign blogs to Editors (bonus).

Comment Management

Add comments to blogs.

Delete own comments.

Technical Stack

Backend Framework: Express.js

Database: MongoDB

Authentication: JWT (JSON Web Tokens)

Email Service: Nodemailer for verification emails.

Deployment: Render / Heroku / Vercel.

Prerequisites

Node.js (v14 or higher)

MongoDB Atlas or local MongoDB server

Git

Installation and Setup

1. Clone the Repository

$ git clone https://github.com/<your-username>/<repo-name>.git
$ cd <repo-name>

2. Backend Setup

Navigate to the backend directory:

$ cd backend

Install dependencies:

$ npm install

Create a .env file:

$ touch .env

Add the following environment variables to the .env file:

MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-secret-key>
EMAIL_SERVICE=<email-service>
EMAIL_USER=<email-username>
EMAIL_PASS=<email-password>
FRONTEND_URL=<frontend-base-url>

Start the server:

$ npm run dev

The backend server will run at http://localhost:5000.

3. Frontend Setup (Optional)

If the frontend is included:

Navigate to the frontend directory:

$ cd frontend

Install dependencies:

$ npm install

Start the development server:

$ npm start

The frontend server will run at http://localhost:3000.

