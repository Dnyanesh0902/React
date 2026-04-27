# 🚀 Day 7: Context API (Global State Management)

## 📌 Overview

This is Day 7 of my **30 Days React Challenge**.

I learned how to:

* Manage global state using Context API  
* Avoid prop drilling problem  
* Share data between multiple components  
* Use Provider and Consumer  
* Build clean scalable React apps  

---

## 🛠 Tech Used

* React  
* JavaScript (ES6)  
* Context API  
* Bootstrap (for styling)  

---

## 💡 What I Built

A **Global User Management App** that includes:

* Login User Data (Global State)  
* Show User in Navbar  
* Display User in Multiple Components  
* Update State from any component  

---

## 📁 Project Structure

```bash
src/
├── context/
│   └── UserContext.jsx
├── components/
│   ├── Navbar.jsx
│   ├── Profile.jsx
│   └── Dashboard.jsx
├── App.jsx
└── main.jsx
```
---
### 🔥 Key Concepts
---
## ✅ What is Context API?

Context API allows you to share data globally without passing props manually.
---
## ✅ Create Context
``` jsx
import { createContext } from "react";

export const UserContext = createContext();
```
---
## ✅ Provider (Global Data)
``` jsx
<UserContext.Provider value={{ user, setUser }}>
  <App />
</UserContext.Provider>
```
---
## ✅ useContext Hook

``` jsx
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const { user } = useContext(UserContext);
```
---

## ✅ Updating Global State
``` jsx
setUser({
  name: "Dnyanesh",
  role: "Full Stack Developer"
});
```
---
### 📷 Output
* User data shown in Navbar
* Same data used across multiple components
* No prop drilling
* Clean global state management
---
### 🎯 Interview Questions
---
## 1. What is Context API?

👉 Context API is used to manage global state in React.
---
## 2. Why use Context API?

👉 To avoid prop drilling and share data easily across components.
---
## 3. What is Provider?

👉 Provider makes data available to all child components.
---
## 4. What is Consumer / useContext?

👉 It is used to access context data in components.
---
## 5. What problem does Context API solve?

👉 It solves prop drilling problem.
---
## 6. When should we NOT use Context API?

👉 For frequently changing state (use Redux or Zustand instead).
---
🚀 Next

Day 8: useReducer Hook (Advanced State Management) 🔥
---