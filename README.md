# 📝 Domiko

A full-featured **blogging platform** built using **Node.js**, **Express**, and **MongoDB**, and deployed on **Vercel** using **serverless functions**. Includes admin login, comment moderation, and a lightweight JSON/Markdown-based blog system. Designed to run efficiently on **free plans** like Vercel + MongoDB Atlas.

---

## Screenshot
![Domiko Screenshot ](https://github.com/Prince1895/Domiko/blob/main/client/src/assets/Screenshot%202025-06-16%20013358.png)
![Domiko Screenshot- mobile view](https://github.com/Prince1895/Domiko/blob/main/client/src/assets/WhatsApp%20Image%202025-06-16%20at%2002.18.54_83e10c0c.jpg)

## 🔗 Live Demo

👉 [Click here to view Domiko live](https://domiko-client.vercel.app/)



## 🚀 Features

* ✅ JWT-based Admin Authentication
* ✅ Admin Dashboard with blog and comment stats
* ✅ Blog creation with images (via `multer`)
* ✅ Markdown/JSON storage for blog content
* ✅ Comment approval and deletion
* ✅ Blog publish, unpublish and deletion
* ✅ Secure API with route protection middleware
* ✅ MongoDB Atlas database integration
* ✅ Vercel deployment using serverless Express
* ✅ Image save in imageKit.io
* ✅ Fully responsive on Small and large devices


---

## 📁 Project Structure
Backend (server/src)
```

.                 
├── index.js                # Main Express app
├── .vercel.json            # Vercel config
├── config/
│   └── db.js               # MongoDB connection
├── controllers/
├── middleware/
├── models/
├── routes/
├── blogs/                  # Markdown/JSON blog content
├── views/                  # EJS templates
└── public/uploads/         # Uploaded images
```
Frontend (client/src)
```
/client/src
├── assets/               # Static assets like images, icons
├── components/
│   ├── admin/            # Admin-specific components
│   │   ├── CommentTable.jsx
│   ├── BlogCard.jsx
│   ├── BlogList.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Loader.jsx
│   ├── LoginCard.jsx
│   ├── Navbar.jsx
│   ├── Newsletter.jsx
│   ├── SideBar.jsx
│   ├── Login.jsx
│   └── Signup.jsx
├── context/
│   └── AppContext.jsx    # Global state using Context API
├── pages/
│   ├── admin/
│   ├── Blog.jsx
│   └── Home.jsx
├── App.jsx
├── index.js
├── main.jsx
└── index.css

```
---

## 📊 Technologies Used

| Library / Tool               | Use Case                          |
| ---------------------------- | --------------------------------- |
| `express`                    | Web framework                     |
| `mongoose`                   | MongoDB ORM                       |
| `jsonwebtoken`               | Admin authentication              |
| `bcryptjs`                   | Password hashing                  |
| `multer`                     | File uploads                      |
| `slugify`                    | URL-friendly slugs                |
| `@vendia/serverless-express` | Vercel-compatible Express handler |
| `dotenv`                     | Env variables                     |
| `cors`                       | Cross-origin access               |
| `ImageKit.io`                | For saving blog images at cloud   |
| `Gemini`                     | Auto blog description generation  |
| `React-Toaster`              | For popups and notification       |
| `Axios`                      | Fontend Backend connection        |
| `marked-react`               | For parsing text                  |
| `Tailwind`                   | For styling Page                  |
| `Motion`                     | For animations                    |
| `quill`                      | for blog description              |


---

## ⚙️ Setup & Run

### 1. Clone & Install

```bash
git clone https://github.com/Prince1895/Domiko
cd Domiko
npm install
```

### 2. Environment Setup

Create a `.env` file:

```env
PORT=3001
JWT_SECRET=your_jwt_secret
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/
```

Ensure your MongoDB cluster allows access from `0.0.0.0/0` (or Vercel IPs).

### 3. Vercel Config

#### `.vercel.json`

```json
  {
    "version": 2,
    "builds": [
        {
            "src": "index.js",
            "use": "@vercel/node",
            "config": {
                "includeFiles": [
                    "dist/**"
                ]
            }
        }
    ],
    "routes": [
        {
            "src": "/(.*)",
            "dest": "index.js"
        }
    ]
}
```


---


## 🚫 Admin Login Setup

Insert admin manually in DB:

```js
{
  email: "admin@example.com",
  password: "<bcrypt-hashed-password>"
}
```

---

## 🚀 Roadmap

* [ ] Multi-user support
* [ ] Newsletter integration
* [ ] Social media share buttons

---

## 🚑 Known Limitations

* Blog creation is admin-only

---

## 📅 Author & License

MIT License © 2025 \[Prince Kumar]

Connect on [LinkedIn](https://www.linkedin.com/in/prince1184/) for updates or collaborations!
Connect on [X](https://x.com/Prince_codes) for updates or collaborations!
