# 🚀 Day 5: Forms & POST API (Add Employee Form)

## 📌 Overview

This is Day 5 of my **30 Days React Challenge**.

I learned how to:

* Handle forms in React  
* Use controlled components  
* Manage form state using useState  
* Send data to API (POST request)  
* Handle user input dynamically  

---

## 🛠 Tech Used

* React  
* JavaScript (ES6)  
* Bootstrap (for styling)  
* Public API (JSONPlaceholder)  

---

## 💡 What I Built

An **Add Employee Form** that:

* Takes user input (Name, Email, Role)  
* Stores input using state  
* Sends data to API using POST request  
* Shows success message after submission  
* Resets form after submit  

---

## 📁 Project Structure

```bash
src/
├── components/
│   └── AddEmployee.jsx
├── App.jsx
```

---

## 🔥 Key Concepts

### ✅ Controlled Components

React controls form inputs using state.

```jsx
const [formData, setFormData] = useState({
  name: "",
  email: "",
  role: ""
});
```

---

### ✅ Handling Input Changes

```jsx
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};
```

---

### ✅ Form Submission

```jsx
const handleSubmit = (e) => {
  e.preventDefault();
};
```

---

### ✅ POST API Call

```jsx
fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(formData)
});
```

---

### ✅ Form Reset

```jsx
setFormData({
  name: "",
  email: "",
  role: ""
});
```

---

## 📷 Output

* Form UI with Bootstrap styling  
* User can enter employee details  
* Data sent to API on submit  
* Success message displayed  

---

## 🎯 Interview Questions

### 1. What is a controlled component?

👉 A component where form data is handled by React state.

---

### 2. Why use useState in forms?

👉 To store and manage user input dynamically.

---

### 3. What is onChange in React?

👉 It is an event that triggers when input value changes.

---

### 4. Why use e.preventDefault()?

👉 To prevent page reload on form submission.

---

### 5. How do you send data to an API in React?

👉 Using fetch or axios with POST method.

---

### 6. What is JSON.stringify()?

👉 Converts JavaScript object into JSON string for API request.

---

### 7. Difference between GET and POST?

👉 GET → Fetch data  
👉 POST → Send data  

---

## 🚀 Next

Day 6: Routing (React Router - Multi Page App) 🔥