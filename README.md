# Airbnb Clone

## Project Overview
This Airbnb clone project is a full-stack web application that replicates key features of Airbnb. It allows users to:
- View listed properties.
- Book properties.
- Manage bookings.

### **Updated Feature List**
- **Frontend**:
  - Responsive user interface using HTML, CSS, and JavaScript.
  - Dynamic property listings.
  - User authentication and registration.
- **Backend**:
  - RESTful APIs built with Node.js and Express.
  - MongoDB database for storing user and property data.
  - JWT-based authentication.
- **Bonus Features**:
  - Admin panel to manage properties and users.



## Setting Up the Project

### **Prerequisites**
1. Node.js and npm installed on your machine.
2. MongoDB installed locally or an online MongoDB Atlas account.

### **Instructions**

#### **Backend Setup**
1. Clone the repository
2. Navigate to the backend directory:

   cd backend
  
3. Install dependencies:
   
   npm install
   
4. Create a `.env` file in the backend directory and add the following:
   
   PORT=3000
   MONGO_URI=<>

5. Start the backend server:
  
   node index.js
   
   The backend server will run on `http://localhost:3000`.

#### **Frontend Setup**
1. Navigate to the frontend directory:

2. Install dependencies:
  
   npm install
  
3. Start the frontend server:
   npm run dev
   The frontend server will run on `http://localhost:3000`.





### **Endpoints**
#### **Authentication**
- `POST /api/auth/register`
  - Registers a new user.
  - Request Body:
    ```json
    {
      "name": "string",
      "email": "string",
      "password": "string"
    }
    ```

- `POST /api/auth/login`
  - Authenticates a user.
  - Request Body:
    ```json
    {
      "email": "string",
      "password": "string"
    }
    ```

#### **Properties**
- `GET /api/properties`
  - Fetches a list of all properties.
- `GET /api/properties/:id`
  - Fetches details of a single property.

#### **Bookings**
- `POST /api/bookings`
  - Books a property.
  - Request Body:
    ```json
    {
      "propertyId": "string",
      "userId": "string",
      "dates": ["string"]
    }
    ```

- `GET /api/bookings`
  - Fetches a user’s bookings.

---

## Admin Panel
1. Access the admin panel at `http://localhost:3000/admin` (or the deployed link).
2. Admin credentials can be set in the database or via environment variables.
3. Features include:
   - Managing properties (add, update, delete).
   - Managing users.


