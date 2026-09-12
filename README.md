# 🧱 DevStack - Build Your Ideal Development Stack

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Toastify](https://img.shields.io/badge/React--Toastify-10.0-orange?style=flat)](https://fkhadra.github.io/react-toastify/)

> **DevStack** is a modern, responsive web application designed for developers and engineering teams to discover, compare, and assemble their ideal tech stack. Explore frontend libraries, backend runtimes, databases, languages, styling systems, and DevOps tools with real-time stack curation and feedback.

---


## 🌟 3 Key Features


1. **Interactive Stack Builder with Real-Time Duplication Safeguards**:
   - Seamlessly add technologies from the catalog to your custom "Your Stack" drawer.
   - Instant visual feedback: cards dynamically transition to a disabled `✓ Added to Stack` state.
   - Built-in duplicate prevention with gentle toast warnings if an item is already present.

2. **Granular & Bulk Stack Management with React-Toastify**:
   - Remove individual technologies directly from your stack drawer with one click to re-enable them in the catalog.
   - Use the "Remove All" action to reset your workspace instantly.
   - Custom animated toast notifications for every action: additions, duplicate attempts, item deletions, and complete stack resets.

3. **Responsive Architecture & Centralized Brand Theme**:
   - Fully optimized across mobile, tablet, and widescreen desktop layouts.
   - Features a mobile-responsive navbar with a collapsible hamburger drawer.
   - Centralized gradient brand theme (`orange → pink → violet`) driven by CSS variables for effortless single-point customization.

---


## 🛠️ Technologies Used

- **Frontend Framework**: [React.js](https://react.dev/) (Hooks: `useState`, `useEffect`)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & Vanilla CSS Variables
- **Icons**: [Lucide React](https://lucide.dev/) & [Devicon CDN](https://devicon.dev/)
- **Notifications**: [React-Toastify](https://fkhadra.github.io/react-toastify/)
- **Data Source**: Standalone asynchronous JSON (`technologies.json`)
- **Typography**: [Google Fonts (Inter)](https://fonts.google.com/specimen/Inter)

---


## 🧠 React Conceptual Questions & Answers

### 1. What is JSX, and why is it used in React?
**Answer:**  
JSX stands for **JavaScript XML**. It is a syntax extension that allows developers to write HTML-like markup directly inside JavaScript files. It is used in React because it makes component templates readable, intuitive, and declarative, keeping UI structure and rendering logic tightly co-located. During the build process, JSX is compiled into standard `React.createElement()` function calls.

### 2. What is the difference between props and state?
**Answer:**  
- **Props (Properties):** Read-only data passed from a parent component down to a child component. Props are immutable from the perspective of the receiving child component.
- **State:** Internal, mutable data managed directly within a component. When state is updated via its setter function (e.g., `setState` from `useState`), React re-renders the component to reflect the latest changes in the UI.

### 3. What does the `useState` hook do, and where did you use it in this project?
**Answer:**  
The `useState` hook allows functional components to declare, preserve, and update reactive state variables between renders.  
In this project, `useState` is used in:
- `App.jsx`: Managing `technologies` (fetched tech list), `loading` (data loading state), and `selectedStack` (array of chosen technologies).
- `Navbar.jsx`: Managing `mobileMenuOpen` (toggling the mobile navigation drawer) and `activeNav`.
- `TechGrid.jsx`: Managing `activeCategory` for interactive category filtering.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:**  
The `useEffect` hook lets functional components perform side effects, such as data fetching, subscriptions, and DOM manipulations after rendering.  
In this project, `useEffect` was required to fetch `technologies.json` asynchronously when the application first loads. Passing an empty dependency array (`[]`) guarantees that the network request executes only once when the component mounts, avoiding infinite fetch loops on re-render.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:**  
React relies on the unique `key` prop during its Virtual DOM diffing process to identify which items in a list have been inserted, updated, or removed. A stable, unique key enables React to efficiently re-render only the modified DOM elements rather than re-creating the entire list, ensuring optimal performance and preventing UI state discrepancies.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).
**Answer:**  
Conditional rendering is the practice of rendering specific UI components or markup based on Boolean logic or state conditions.  
In this project, it was utilized in `YourStack.jsx` to alternate between the empty placeholder and the selected items list:
```jsx
{count === 0 ? (
  <div className="border border-dashed border-slate-200 rounded-2xl py-12 px-4 flex items-center justify-center text-center">
    <p className="text-slate-400 text-sm">Your stack is empty.</p>
  </div>
) : (
  <div className="space-y-3">
    {/* List of selected technology cards & Remove All button */}
  </div>
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Answer:**  
- **Parent to Child:** The parent component passes data downwards as attributes (props) to the child (e.g., `<TechCard tech={item} isAdded={isAdded} />`).
- **Child to Parent:** The parent defines a handler function and passes it down as a callback prop (e.g., `<TechCard onAdd={handleAddToStack} />`). The child triggers this function when an event happens (such as a button click: `onClick={() => onAdd(tech)}`), passing relevant data back up to the parent.


