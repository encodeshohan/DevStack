# 🚀 DevStack

A modern and responsive technology stack explorer built with React, TypeScript, and Tailwind CSS. DevStack allows developers to explore different technologies, view their details, and build their own development stack by selecting the technologies they want to use.

---

## 🌐 Project Overview

**DevStack** is a frontend web application designed to help developers explore and organize technologies used in modern software development.

Technologies are organized into categories such as:

- Frontend
- Backend
- Database
- Language
- Styling
- DevOps
- Tools

Users can browse available technologies and add them to their personal stack.

---

## 🛠️ Technologies Used

### Frontend

- ⚛️ React
- 🔷 TypeScript
- 🎨 Tailwind CSS
- 🌼 DaisyUI
- ⚡ Vite

### Libraries

- `react-icons` — Icons
- `react-hot-toast` — Success and error notifications

### Data

- 📄 JSON — Technology information is stored in `public/data.json`

---

## ✨ Features

### 1. 🔎 Explore Technologies

Browse different development technologies with useful information such as:

- Technology name
- Category
- Description
- Rating
- Difficulty level
- Technology badge

### 2. 🧩 Build Your Own Stack

Users can select technologies and add them to **Your Stack**.

Selected technologies are displayed in a separate sidebar, where users can also remove individual technologies or remove the entire stack.

### 3. 📱 Responsive Design

The application is designed to work across different screen sizes.

It includes:

- Responsive navigation
- Mobile menu
- Responsive technology cards
- Responsive technology grid
- Mobile-friendly stack section

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── Banner.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── technologies.ts
│   └── technologies/
│       ├── Technologies.tsx
│       └── TechnologiesCard.tsx
│
├── App.css
├── App.tsx
├── index.css
└── main.tsx

public/
└── data.json
```
---

# React Questions

1. **What is JSX, and why is it used in React?**
   Markup syntax inside JavaScript. Babel compiles each tag into a `React.createElement()` call. It's used because nested UI is far easier to read as tags than as nested function calls. Differences from HTML: `className`, camelCase events, all tags close, `{}` for expressions.

2. **What is the difference between props and state?**
   Props come from the parent and are read-only. State belongs to the component and changes via its setter. If this component changes the value, it's state; if it only displays it, it's a prop.

3. **What does the `useState` hook do, and where did you use it in this project?**
   Gives a component a value React remembers across renders, returning `[value, setter]`. Calling the setter queues a re-render. In this project it's every `const [x, setX] = useState(...)` line — the stack array, plus loading and input values.

4. **What does the `useEffect` hook do, and why did you need it to load the JSON data?**
   Runs code after render, for side effects like fetching. JSON loading needs it because fetch is async and can't run during render, and calling it in the component body would loop: fetch, setState, re-render, fetch again. `[]` as the dependency array runs it once.

5. **Why does every item in a `.map()` list need a unique `key` prop?**
   React matches old elements to new ones by key to work out what changed. Without stable keys it falls back to position, so deleting one row makes React think every later row changed, and component state sticks to the wrong item. Use an ID from the data, not the index.

6. **What is conditional rendering? Show one place you used it (example: the empty stack message).**
   Choosing what to return with plain JavaScript: `? :`, `&&`, or an early `return`. The empty stack case:

   ```jsx
   {stack.length === 0
     ? <p>Nothing on the stack yet.</p>
     : stack.map(item => <Card key={item.id} {...item} />)}
   ```

   Avoid `{stack.length && ...}` here, since a zero renders as the character `0`.

7. **How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
   Down via props: `<Child text={value} />`. Up via a callback the parent passes down and the child calls: `<AddForm onAdd={handleAdd} />`, then `onAdd(text)` inside the child. State stays in the parent. Siblings that share a value need it lifted to their common parent.

---

## 📌 Future Improvements

Some features that could be added in the future:

- 🔍 Search technologies
- 🏷️ Filter technologies by category
- 📊 Compare technologies
- 💾 Save the selected stack
- 🌙 Dark mode
- 🔗 Technology documentation links

---

## 👨‍💻 Author

**MD. SHOHANUR RAHMAN SHOHAN**

Built with ❤️ using React, TypeScript, and Tailwind CSS.