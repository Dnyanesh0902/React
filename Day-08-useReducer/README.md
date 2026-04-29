# 🚀 Day 8: useReducer (Advanced State Management)

## 📌 Overview

This is Day 8 of my **30 Days React Challenge**.

I learned how to:

* Manage complex state using useReducer  
* Handle multiple state updates efficiently  
* Use dispatch and actions  
* Write scalable state logic  
* Build real-world structured applications  

---

## 🛠 Tech Used

* React  
* JavaScript (ES6)  
* useReducer Hook  
* Bootstrap (for styling)  

---

## 💡 What I Built

A **Task Manager App** that includes:

* Add new tasks  
* Delete individual tasks  
* Clear all tasks  
* Manage state using reducer logic  
* Clean and scalable structure  

---

## 📁 Project Structure

```bash
src/
├── components/
│   ├── TaskForm.jsx
│   └── TaskList.jsx
├── reducer/
│   └── taskReducer.js
├── App.jsx
```
---
## 🔥 Key Concepts
---
## ✅ What is useReducer?

useReducer is a React hook used to manage complex state logic.
---
## ✅ Basic Syntax
``` jsx
const [state, dispatch] = useReducer(reducer, initialState);
```
---
## ✅ Reducer Function
``` jsx
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    default:
      return state;
  }
};
```
---
## ✅ Dispatch Action
``` js
dispatch({
  type: "ADD",
  payload: newTask
});
```
---
## ✅ State Flow

👉 User Action → dispatch() → reducer() → new state → UI update
---
## 📷 Output
* Add tasks dynamically
* Delete tasks instantly
* Clear all tasks
* Clean UI with Bootstrap
* Scalable state management
---
## 🎯 Interview Questions
---
## 1. What is useReducer?

👉 useReducer is used to manage complex state logic in React.
---
## 2. Difference between useState and useReducer?

👉 useState → simple state
👉 useReducer → complex state
---
## 3. What is a reducer function?

👉 A function that decides how state changes based on action.
---
## 4. What is dispatch?

👉 It sends an action to the reducer.
---
## 5. What is an action?

👉 An object with type and payload describing what to do.
---
## 6. When should we use useReducer?

👉 When state logic is complex or involves multiple updates.
---
## 7. What are advantages of useReducer?

👉 Better organization, scalability, and maintainability.
---
🚀 Next

Day 9: Custom Hooks (Reusable Logic) 🔥
---