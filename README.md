# 🎨 Job Tracker Frontend (React + Vite)

A modern **React frontend** for the **Job Tracker Application** that allows users to manage job applications efficiently.
Built with **React, Vite, Axios, and React Router**, this UI communicates with the **Spring Boot backend API** using JWT authentication.

The application provides **user dashboards, admin analytics, and secure authentication flows** for managing job tracking data.

---

# 🚀 Features

### 🔐 Authentication

- User Registration
- User Login
- JWT Authentication
- Secure API requests using Bearer Tokens

### 👤 User Features

- User Dashboard
- Track job applications
- View application status
- Manage personal job data

### 🛠 Admin Features

- Admin Dashboard
- Application Analytics
- System monitoring

### 🎨 UI Features

- Modern UI design
- Responsive layout
- Glassmorphism styled authentication pages
- Sidebar navigation
- Clean dashboard layout

---

# 🛠 Tech Stack

| Technology   | Purpose            |
| ------------ | ------------------ |
| React        | Frontend Framework |
| Vite         | Build Tool         |
| React Router | Routing            |
| Axios        | API Communication  |
| CSS          | Styling            |

---

# 📂 Project Structure

```
src
│
├── api
│   └── axios.js          # Axios configuration
│
├── assets
│   └── login-bg.jpg      # Background assets
│
├── components
│   └── Sidebar.jsx       # Sidebar navigation component
│
├── pages
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Dashboard.jsx
│   ├── AdminDashboard.jsx
│   └── AdminAnalytics.jsx
│
├── styles
│   ├── login.css
│   ├── dashboard.css
│   ├── admin.css
│   └── sidebar.css
│
├── App.jsx               # Main application routes
├── main.jsx              # Application entry point
└── index.css
```

---

# 🔐 Authentication Flow

1. User registers using the **Register page**
2. User logs in using credentials
3. Backend returns a **JWT Token**
4. Token is stored in **localStorage**
5. Token is sent in request headers for protected APIs

Example header:

```
Authorization: Bearer <your-token>
```

---

# ⚙️ Setup Instructions

## 1️⃣ Clone Repository

```bash
git clone https://github.com/sharief44/jobtracker-frontend.git
cd jobtracker-frontend
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Start Development Server

```bash
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

# 🔗 Backend API

This frontend connects to the **Job Tracker Spring Boot Backend**.

Default API URL:

```
http://localhost:8080
```

Make sure the backend server is running before starting the frontend.

Backend Repository:

```
https://github.com/sharief44/jobtracker-backend
```

---

# 📊 Future Improvements

- Job Application Filters
- Email Notifications
- Dark Mode
- Application Status Charts
- Export Job Data
- UI Animations

---

# 👨‍💻 Author

**Sharief Sk**

Full Stack Java Developer
Java | Spring Boot | React | PostgreSQL

---

# ⭐ Support

If you like this project, consider giving it a **⭐ on GitHub**!
