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