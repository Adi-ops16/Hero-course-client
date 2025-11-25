# 📘 Hero Courses

A modern full-stack web application for creating, managing, and exploring online courses. Users can register/login, create their own courses, browse courses, and view detailed information about each course. Built with **Next.js (App Router)**, **React**, **Tailwind CSS**, and **DaisyUI**, with **MongoDB** as the backend database.

---

## 🚀 Features

- 🔐 **Authentication** with Firebase (Email/Password + Google)
- 🎯 **Protected Routes**: `/create-a-course`, `/my-courses`
- ➕ **Create a Course**: add name, category, price, description, thumbnail
- 📚 **Browse All Courses**
- 🗂️ **View User's Own Courses**
- 📝 **Delete Courses with instant UI update**
- 📄 **Course Details Page** (responsive & theme-consistent)
- 🎨 Fully responsive UI with Tailwind + DaisyUI
- ⚡ Sweet notifications with SweetAlert2
- 🖼️ Optimized images using `next/image`

---

## 🛠️ Tech Stack

- **Frontend:** Next.js (App Router), React, Tailwind CSS, DaisyUI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Firebase
- **Other:** Axios, SweetAlert2, cookies-next

---

## 📦 Setup & Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/hero-courses.git
cd hero-courses
```


### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Set up environment variables
```js
NEXT_PUBLIC_API_URL=http://localhost:4000
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_project.appspot.com
FIREBASE_MESSAGING_SENDER_ID=xxxxxxx
FIREBASE_APP_ID=xxxxxxx
```

### 4️⃣ Run development server
```bash
npm run dev
```

