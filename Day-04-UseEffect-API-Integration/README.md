# 🚀 Day 4: useEffect & API Integration (Employee Dashboard)

## 📌 Overview

This is Day 4 of my **30 Days React Challenge**.

I learned how to:

* Use useEffect hook
* Fetch data from API
* Handle loading state
* Render dynamic data from server

---

## 🛠 Tech Used

* React
* JavaScript (ES6)
* Bootstrap (for styling)
* Public API (JSONPlaceholder)

---

## 💡 What I Built

An **Employee Dashboard** that:

* Fetches employee data from API
* Displays employee details in cards
* Shows loader while fetching data

---

## 📁 Project Structure

```
src/
├── components/
│ ├── EmployeeCard.jsx
│ └── Loader.jsx
├── App.jsx
```

---

## 🔥 Key Concepts

### ✅ useEffect

useEffect is used to perform side effects like API calls.

```jsx
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setEmployees(data));
}, []);
```
---
## ✅ API Fetching
Fetching data from external server.
``` jsx
fetch(url)
  .then(res => res.json())
```
---
## ✅ useState

Used to store API data and loading state.
``` jsx
const [employees, setEmployees] = useState([]);
const [loading, setLoading] = useState(true);
```
---
## ✅ Conditional Rendering

Show loader or data based on state.
``` jsx
{loading ? <Loader /> : <EmployeeList />}
```
---
## 📷 Output
* Loader spinner while fetching data
* Employee cards displayed after API response
---
## 🎯 Interview Questions
# 1. What is useEffect?
👉 useEffect is a React hook used for side effects like API calls, subscriptions, etc.
---
# 2. Why do we use [] in useEffect?
👉 To run the effect only once (on component mount).
---
# 3. What is an API in React?
👉 API is a service that provides data from a server.
---
# 4. Difference between useState and useEffect?
👉 useState → stores data
👉 useEffect → performs side effects
---
# 5. What is conditional rendering?
👉 Rendering UI based on conditions (like loading state).
---
# 6. What is loading state?
👉 A state used to show loading UI while data is being fetched.
----
## 🚀 Next
Day 5: Forms & POST API (Add Employee Form)