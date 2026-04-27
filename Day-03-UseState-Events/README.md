# 🚀 Day 3: State & Events (Counter App)

## 📌 Overview

This is Day 3 of my **30 Days React Challenge**.

I learned how to:

* Use useState hook
* Handle events in React
* Update UI dynamically

---

## 🛠 Tech Used

* React
* JavaScript (ES6)
* Bootstrap (for styling)

---

## 💡 What I Built

A **Counter App** that can:

* Increment value
* Decrement value
* Reset value

---

## 📁 Project Structure

```
src/
 ├── components/
 │     └── Counter.jsx
 ├── App.jsx
```

---

## 🔥 Key Concepts

### ✅ useState

useState is used to manage state in functional components.

```jsx
const [count, setCount] = useState(0);
```

---

### ✅ Event Handling

Handling button click events in React.

```jsx
<button onClick={() => setCount(count + 1)}>Increment</button>
```

---

### ✅ Re-rendering

When state changes, React automatically updates the UI.

---

## 📷 Output

A working counter UI with buttons and dynamic updates.

---

## 🎯 Interview Questions

### 1. What is useState?

👉 useState is a React hook used to manage state in functional components.

---

### 2. Why do we need state in React?

👉 State allows dynamic updates of UI without reloading the page.

---

### 3. What happens when state changes?

👉 The component re-renders and updates the UI.

---

### 4. Can we update state directly?

👉 ❌ No
👉 We must use the setter function (setCount)

---

### 5. What is event handling in React?

👉 It is the process of handling user actions like clicks, input, etc.

---

### 6. What is re-render in React?

👉 Re-render means updating the UI when state or props change.

---

## 🚀 Next

Day 4: useEffect + API Call (Real Project)
