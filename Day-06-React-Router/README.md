# 🚀 Day 6: Routing (React Router - Multi Page App)

## 📌 Overview

This is Day 6 of my **30 Days React Challenge**.

I learned how to:

* Implement routing in React  
* Create multiple pages (SPA - Single Page Application)  
* Navigate between pages without reload  
* Use React Router  
* Handle dynamic navigation  

---

## 🛠 Tech Used

* React  
* JavaScript (ES6)  
* React Router DOM  
* Bootstrap (for styling)  

---

## 💡 What I Built

A **Multi-Page Employee App** that includes:

* Home Page  
* Employee List Page  
* Add Employee Page  
* Navigation Bar  

---

## 📁 Project Structure

```bash
src/
├── components/
│   ├── Navbar.jsx
│   ├── EmployeeList.jsx
│   └── AddEmployee.jsx
├── pages/
│   ├── Home.jsx
│   ├── Employees.jsx
│   └── Add.jsx
├── App.jsx
```

---

## 🔥 Key Concepts

### ✅ React Router Setup

Install React Router:

```bash
npm install react-router-dom
```

---

### ✅ BrowserRouter

Wrap your app with router:

```jsx
import { BrowserRouter } from "react-router-dom";

<BrowserRouter>
  <App />
</BrowserRouter>
```

---

### ✅ Routes & Route

Define routes for pages:

```jsx
import { Routes, Route } from "react-router-dom";

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/employees" element={<Employees />} />
  <Route path="/add" element={<Add />} />
</Routes>
```

---

### ✅ Navigation (Link)

Navigate without page reload:

```jsx
import { Link } from "react-router-dom";

<Link to="/employees">Employees</Link>
```

---

### ✅ useNavigate Hook

Programmatic navigation:

```jsx
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

navigate("/employees");
```

---

## 📷 Output

* Navbar with navigation links  
* Multiple pages without refresh  
* Smooth navigation between pages  
* Professional UI layout  

---

## 🎯 Interview Questions

### 1. What is React Router?

👉 React Router is used to handle navigation in React applications.

---

### 2. What is SPA (Single Page Application)?

👉 A web app that loads a single HTML page and updates content dynamically.

---

### 3. Difference between Link and `<a>` tag?

👉 Link → No page reload  
👉 `<a>` → Reloads the page  

---

### 4. What is BrowserRouter?

👉 It enables routing using browser history API.

---

### 5. What is useNavigate?

👉 A hook used to navigate programmatically.

---

### 6. What is Route?

👉 It maps a URL path to a component.

---

### 7. Why use React Router?

👉 To create fast and seamless navigation in React apps.

---

## 🚀 Next

Day 7: Context API (Global State Management) 🔥