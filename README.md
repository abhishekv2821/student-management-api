# 🎓 Student Management API

<div align="center">

### 🚀 A RESTful Student Management Backend built with Node.js, Express.js & MongoDB

**Simple • Scalable • RESTful • Database-Powered**

<br>

![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-5.x-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-ODM-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

---

## 📌 About The Project

**Student Management API** is a backend REST API designed to perform complete CRUD operations on student records.

The project was built to understand how a real-world backend application works using:

- 🟢 Node.js
- ⚡ Express.js
- 🍃 MongoDB
- 🧩 Mongoose
- 🔐 Environment Variables
- 🌐 REST API Architecture

The API allows clients such as **Postman, web applications, mobile applications, or frontend frameworks** to create, read, update, and delete student data.

---

## ✨ Features

| Feature | Description |
|---|---|
| ➕ Create Student | Add a new student |
| 📋 Get Students | Retrieve all students |
| 🔎 Get Student | Retrieve a student by ID |
| ✏️ Update Student | Update existing student information |
| 🗑️ Delete Student | Remove a student |
| 🗄️ MongoDB | Persistent database storage |
| 🔒 Environment Variables | Secure configuration using `.env` |
| 🧱 MVC Structure | Organized backend architecture |
| 🚨 Error Handling | Handles API and database errors |

---

## 🏗️ Project Architecture

```text
                        ┌──────────────┐
                        │   Postman    │
                        │  API Client  │
                        └──────┬───────┘
                               │
                               ▼
                        ┌──────────────┐
                        │   Express    │
                        │    Server    │
                        └──────┬───────┘
                               │
                               ▼
                        ┌──────────────┐
                        │    Routes    │
                        └──────┬───────┘
                               │
                               ▼
                        ┌──────────────┐
                        │ Controllers  │
                        └──────┬───────┘
                               │
                               ▼
                        ┌──────────────┐
                        │   Mongoose   │
                        │    Model     │
                        └──────┬───────┘
                               │
                               ▼
                        ┌──────────────┐
                        │   MongoDB    │
                        │   Database   │
                        └──────────────┘
```

---

## 📁 Project Structure

```text
student-management-api/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── studentController.js
│
├── models/
│   └── Student.js
│
├── routes/
│   └── studentRoutes.js
│
├── .env
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

### 📂 Folder Responsibilities

**`config/`**

Contains database configuration and MongoDB connection logic.

**`controllers/`**

Contains the business logic for student operations.

**`models/`**

Contains Mongoose schemas and database models.

**`routes/`**

Contains API endpoint definitions.

**`server.js`**

The main entry point of the application.

---

# 🚀 Getting Started

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/abhishekv2821/student-management-api
```

Then move into the project:

```bash
cd student-management-api
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory:

```env
PORT=8080
MONGO_URI=your_mongodb_connection_string
```

### Example

```env
PORT=8080
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/studentDB
```

> ⚠️ Never commit your `.env` file to GitHub.

---

## 4️⃣ Start the Server

### Development

Using Nodemon:

```bash
npx nodemon server.js
```

Or:

```bash
npm run dev
```

### Production

```bash
node server.js
```

If everything is configured correctly:

```text
MongoDB connected
Server is running on port 8080
```

---

# 🌐 API Documentation

Base URL:

```text
http://localhost:8080/api/v1/students
```

---

## 📋 Get All Students

### Request

```http
GET /api/v1/students
```

### Response

```json
{
  "success": true,
  "data": [
    {
      "_id": "691abc123",
      "name": "Abhishek",
      "course": "MCA AIML"
    }
  ]
}
```

---

## ➕ Create Student

### Request

```http
POST /api/v1/students
```

### Body

```json
{
  "name": "Abhishek",
  "course": "MCA AIML"
}
```

### Response

```json
{
  "success": true,
  "message": "Student created successfully",
  "data": {
    "_id": "691abc123",
    "name": "Abhishek",
    "course": "MCA AIML"
  }
}
```

---

## 🔎 Get Student By ID

### Request

```http
GET /api/v1/students/:id
```

Example:

```http
GET /api/v1/students/691abc123
```

---

## ✏️ Update Student

### Request

```http
PUT /api/v1/students/:id
```

### Body

```json
{
  "name": "Abhishek Kumar",
  "course": "MCA AIML"
}
```

---

## 🗑️ Delete Student

### Request

```http
DELETE /api/v1/students/:id
```

Example:

```http
DELETE /api/v1/students/691abc123
```

---

# 📊 API Endpoints

| Method | Endpoint | Description |
|:---:|---|---|
| 🟢 `GET` | `/api/v1/students` | Get all students |
| 🟢 `POST` | `/api/v1/students` | Create a student |
| 🟡 `GET` | `/api/v1/students/:id` | Get student by ID |
| 🔵 `PUT` | `/api/v1/students/:id` | Update student |
| 🔴 `DELETE` | `/api/v1/students/:id` | Delete student |

---

# 🧪 Testing

This API can be tested using:

- 📮 Postman
- 🧪 Thunder Client
- 🌐 Browser for GET requests
- 💻 cURL
- ⚛️ React / Next.js frontend
- 📱 Mobile applications

### Example cURL Request

```bash
curl http://localhost:8080/api/v1/students
```

---

# 🛠️ Tech Stack

### Backend

- **Node.js** — JavaScript runtime
- **Express.js** — Web framework
- **Mongoose** — MongoDB ODM

### Database

- **MongoDB Atlas**

### Development Tools

- **VS Code**
- **Postman**
- **Git & GitHub**
- **Nodemon**

---

# 🔐 Environment Variables

The application uses environment variables to keep sensitive information outside the source code.

Create:

```text
.env
```

Example:

```env
PORT=8080
MONGO_URI=your_mongodb_connection_string
```

For other developers, provide:

```text
.env.example
```

```env
PORT=8080
MONGO_URI=your_mongodb_connection_string
```

> 🔒 Never upload database credentials, API keys, passwords, or secrets to GitHub.

---

# 🧠 What I Learned From This Project

This project helped me understand the fundamentals of backend development:

```text
HTTP
 ↓
REST APIs
 ↓
Express Routing
 ↓
Controllers
 ↓
CRUD Operations
 ↓
Mongoose
 ↓
MongoDB
 ↓
Environment Variables
 ↓
Git & GitHub
```

### Concepts Practiced

- REST API design
- HTTP methods
- Request & Response
- Route parameters
- `req.body`
- Express middleware
- MVC architecture
- CRUD operations
- MongoDB collections
- Mongoose schemas
- Mongoose models
- Async/Await
- Error handling
- Environment variables
- Git version control

---

# 🔮 Future Improvements

This project can be extended into a complete production-ready backend.

### Planned Features

- [ ] 🔐 User authentication
- [ ] 🔑 JWT authentication
- [ ] 👤 Role-based authorization
- [ ] 🔍 Search students
- [ ] 📄 Pagination
- [ ] 📊 Filtering & sorting
- [ ] ✅ Advanced validation
- [ ] 🚨 Centralized error handling
- [ ] 📝 API documentation with Swagger
- [ ] 🧪 Automated testing
- [ ] 🐳 Docker support
- [ ] ☁️ Deploy backend
- [ ] ⚛️ Connect React frontend

---

# 📈 Future Architecture

The project can eventually evolve into:

```text
                 ┌───────────────┐
                 │ React / Next  │
                 │    Frontend   │
                 └───────┬───────┘
                         │
                         ▼
                  ┌─────────────┐
                  │ REST API    │
                  │   Express   │
                  └──────┬──────┘
                         │
              ┌──────────┴──────────┐
              ▼                     ▼
       ┌─────────────┐       ┌─────────────┐
       │    Auth     │       │   Student   │
       │     JWT     │       │ Controllers │
       └─────────────┘       └──────┬──────┘
                                    │
                                    ▼
                             ┌─────────────┐
                             │   MongoDB   │
                             └─────────────┘
```

---

👨‍💻 Author

<div align="center">

Abhishek Vishwakarma

BCA → MCA AIML | Backend Development | JavaScript | Node.js

Building projects, learning backend development, and leveling up one API at a time. 🚀

</div>

⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

It motivates me to keep building and learning! 🚀

<div align="center">

💻 Built with ❤️ using Node.js & MongoDB

Keep Learning. Keep Building. Keep Shipping. 🚀

</div>
