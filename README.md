🏥 Health AI — Disease Prediction Platform
A full-stack web app that uses Machine Learning to predict diseases, manage doctor appointments, and send email reminders.

✨ Features
🔐 User Auth (Register / Login / Logout)
🤖 ML Predictions — Heart, Kidney, Diabetes, BP, Pneumonia (X-Ray), Brain Tumor (MRI)
📊 Personal Dashboard & Prediction History
🩺 Doctor Directory & Appointment Booking
📧 Automated Email Reminders (24h before appointment)
🛠 Tech Stack
Layer	Tech
Frontend	React 19, Vite, TailwindCSS, Framer Motion
Backend	Node.js, Express, MongoDB Atlas, Nodemailer
ML Server	Python, Django/Flask (Port 8000)
🚀 Quick Setup
Run all 3 servers simultaneously.

Backend

bash

cd Backend
npm install
cp .env.example .env   # Fill in your credentials
npm start              # http://localhost:8080
Frontend

bash

cd Frontend
npm install
npm run dev            # http://localhost:5173
ML Server

bash

pip install -r requirements.txt
python manage.py runserver   # http://localhost:8000
🔐 Environment Variables (Backend/.env)
env

PORT=8080
URL=your_mongodb_connection_string
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
📡 Key API Endpoints
Method	Endpoint	Description
POST	/register	Register user
POST	/login	Login user
POST	/Heart	Heart prediction
POST	/kidney	Kidney prediction
POST	/brain_tumor	Brain tumor (image)
POST	/pneumonia	Pneumonia (image)
POST	/appointment	Book appointment
GET	/History	Prediction history
Made with ❤️ by Health AI Team — Indus University, Sem 7
