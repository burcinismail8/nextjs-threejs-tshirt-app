# 🧥 3D T-Shirt Customizer

An interactive full-stack 3D T-shirt customization app built with **React**, **Three.js**, and **Node.js**. Customize T-shirts with color, logo, or texture — including AI-generated designs — and preview them in real-time on a 3D model.

---

# ⚠️ NOTICE

**AI-powered design generation is currently disabled because the OpenAI API is not connected to a Plus (paid) account. You can still use the full T-shirt customization features manually.**

---

# Link to the project:

https://nextjs-threejs-tshirt-6pucxzsav-burcinismail8.vercel.app/

---

## ✨ Features

- 🎨 **Real-Time 3D Customization** – Change colors, apply textures or logos directly to a T-shirt model
- 🤖 **AI-Generated Designs** – Generate creative designs using OpenAI _(currently disabled due to unpaid API access)_
- ☁️ **Image Upload** – Upload your own designs via Cloudinary
- ⚡ **Fast & Modern Frontend** – Built with Vite, TailwindCSS, and React
- 🖼️ **3D Rendering** – Powered by `@react-three/fiber` and `three.js`

---

## 📁 Project Structure

```bash
├── client/         # React frontend (Vite + Three.js + Tailwind CSS)
├── server/         # Node.js backend (Express + OpenAI + Cloudinary)
└── README.md       # Project documentation
```

---

## 🖥️ Tech Stack

### Frontend (`/client`)

- **React 18**
- **@react-three/fiber** (Three.js renderer for React)
- **@react-three/drei** (3D helpers and abstractions)
- **Valtio** for state management
- **Framer Motion** for UI animations
- **Tailwind CSS** for styling
- **Vite** for development/build tool

### Backend (`/server`)

- **Node.js + Express**
- **Cloudinary** for image uploads
- **OpenAI API** for AI design generation _(currently inactive)_
- **CORS** and **Nodemon** for dev support

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/3d-tshirt-customizer.git
cd 3d-tshirt-customizer
```

### 2. Install Dependencies

**Frontend**

```bash
cd client
npm install
```

**Backend**

```bash
cd server
npm install
```

### 3. Run the App

**Start the backend**:

```bash
cd server
npm start
```

**Start the frontend** (in a separate terminal):

```bash
cd client
npm run dev
```

---

## 📸 Screenshots

![image](https://github.com/burcinismail8/nextjs-threejs-tshirt-app/assets/70316198/40ba6d6c-c7f9-46af-ba49-eb9261152dc7)

![image](https://github.com/burcinismail8/nextjs-threejs-tshirt-app/assets/70316198/77f70c97-ca37-44c2-ba4c-d2f0b41fb1c7)

![image](https://github.com/burcinismail8/nextjs-threejs-tshirt-app/assets/70316198/06098673-4946-46f0-a660-123d9bd0fd53)
