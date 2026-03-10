# 🎨 Job Tracker Frontend (React + Vite)

A modern frontend for the **Job Tracker application** built using **React, Vite, and Axios**.
This UI allows users to register, login, and manage job applications through the backend API.

---

## 🚀 Features

* ✅ User Registration UI
* ✅ User Login UI
* ✅ JWT Authentication Integration
* ✅ Protected Routes
* ✅ API Integration with Spring Boot Backend
* ✅ Modern Glassmorphism UI
* ✅ Responsive Login & Register Pages

---

## 🛠 Tech Stack

* **Frontend:** React
* **Build Tool:** Vite
* **Routing:** React Router
* **HTTP Client:** Axios
* **Styling:** CSS

---

## 📂 Project Structure

```
src
│
├── api
│   └── axios.js
│
├── pages
│   ├── Login.jsx
│   └── Register.jsx
│
├── styles
│   └── login.css
│
├── App.jsx
└── main.jsx
```

---

## 🔐 Authentication Flow

1. User registers using the Register page
2. User logs in using credentials
3. Backend returns a JWT token
4. Token is stored in the frontend
5. Token is sent in request headers for protected APIs

Example header:

```
Authorization: Bearer <your-token>
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/sharief44/jobtracker-frontend.git
cd jobtracker-frontend
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Run Development Server

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🔗 Backend API

This frontend connects to the **Job Tracker Backend API**.

Example API URL:

```
http://localhost:8080
```

Make sure the backend server is running before starting the frontend.

---

## 📈 Future Improvements

* Job Dashboard UI
* Job Application Analytics
* Dark Mode Support
* Notification System
* UI Animations

---

## 👨‍💻 Author

Sharief Sk
Full Stack Java Developer

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
