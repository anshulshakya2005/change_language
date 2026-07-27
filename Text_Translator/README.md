# 🌍 AI Text Translator Chat

A modern AI-powered Text Translator built with **React**, **Tailwind CSS**, and **RapidAPI**. The application provides a clean chat-style interface where users can enter text, choose a target language, and receive translations instantly.

## ✨ Features

- 🌐 Translate text into multiple languages
- 💬 Modern ChatGPT/Gemini-inspired interface
- 🎤 Voice-to-Text input using Speech Recognition API
- 🌙 Light/Dark Mode
- 📏 Live Character Counter with Progress Bar
- 📱 Fully Responsive Design
- ⚡ Fast Translation using RapidAPI
- 🔔 Toast Notifications for Validation Errors
- 🎨 Smooth UI Animations
- 📝 Auto-expanding Input Box

---

## 🛠️ Tech Stack

- React.js
- Tailwind CSS
- React Hook Form
- React Toastify
- React Icons
- Web Speech API
- RapidAPI Translator API

---

## 📂 Project Structure

```
src/
│
├── components/
│   └── TextChange.jsx
│
├── controllers/
│   ├── Getlanguages.js
│   ├── langconverter.js
│   ├── sendmessage.js
│   └── soundtotext.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🚀 Installation

Clone the repository

```bash
git clone https://github.com/anshulshakya2005/change_language.git
```

Move into the project

```bash
cd text-translator
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

---

## 📦 Required Packages

```bash 
npm install react-hook-form
npm install react-icons
npm install react-toastify
```

---

## 🔑 RapidAPI Setup

1. Create an account on RapidAPI.
2. Subscribe to a Translator API.
3. Copy your API Key.
4. Create a `.env` file in the project root.

Example:

```env
VITE_RAPID_API_KEY=YOUR_API_KEY
```

Access it using

```javascript
import.meta.env.VITE_RAPID_API_KEY
```

---

## 🎯 How to Use

1. Type your text.
2. Select the target language.
3. Click **Send**.
4. View the translated text in chat format.
5. Use the microphone button for voice input.
6. Toggle Dark Mode using the top-right button.

---

## 📸 Screenshots

### Light Mode

> Add screenshot here

### Dark Mode

> Add screenshot here

### Voice Input

> Add screenshot here

---

## 🌟 Future Improvements

- Copy translated text
- Text-to-Speech
- Translation History
- Favorite Languages
- Download Translation
- Chat History Storage
- Multiple Theme Colors

---

## 👨‍💻 Author

**Naitik Shakya**

B.Tech Information Technology  
IIIT Una

GitHub: https://github.com/your-username

LinkedIn: https://linkedin.com/in/your-profile

---

## 📄 License

This project is developed for learning purposes and as part of the **QSkill Frontend Internship**.