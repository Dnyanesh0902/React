# 🚀 Day 2: Props & Dynamic UI (Employee Cards)

## 📌 Overview

This is Day 2 of my **30 Days React Challenge**.

I learned how to:

* Use Props in React
* Pass data from parent to child
* Render dynamic UI using map()

---

## 🛠 Tech Used

* React
* JavaScript (ES6)

---

## 💡 What I Built

An **Employee Card UI** that displays:

* Name
* Role
* Salary

---

## 📁 Project Structure

```
src/
 ├── components/
 │     └── EmployeeCard.jsx
 ├── App.jsx
```

---

## 🔥 Key Concepts

### ✅ Props

Props are used to pass data from parent to child component.

```jsx
<EmployeeCard name="Dnyanesh" role="Frontend" salary={50000} />
```

---

### ✅ Destructuring Props

```jsx
function EmployeeCard({ name, role, salary }) {
  return <h3>{name}</h3>;
}
```

---

### ✅ Dynamic Rendering

```jsx
employees.map((emp) => (
  <EmployeeCard key={emp.id} {...emp} />
))
```

---

## 📷 Output

Displays multiple employee cards dynamically.

---

## 🎯 Interview Questions

### 1. What are props in React?

👉 Props are used to pass data from parent to child components.

---

### 2. Are props mutable?

👉 No, props are read-only (immutable).

---

### 3. Why use props?

👉 To make components reusable and dynamic.

---

### 4. What is map() in React?

👉 It is used to render lists dynamically.

---

### 5. Why is key used in React?

👉 Keys help React identify which items changed, added, or removed.

---

### 6. What is destructuring in React?

👉 It is a way to extract values from props easily.

---

## 🚀 Next

Day 3: State & Events (Counter App)
