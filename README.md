# PreppedUp - AI-Powered Mock Interview Platform

PreppedUp is an advanced web application designed to help users prepare for real-life interviews by simulating mock interview scenarios using AI. With seamless user authentication, an intuitive interface, and the power of AI integration, this platform is the ultimate tool for interview preparation.

---

## Key Features

### 1. **AI-Powered Mock Interviews**
Harness the power of **Google Gemini AI** to simulate realistic interview scenarios, assess responses, and offer tailored feedback for continuous improvement.

### 2. **Secure Authentication**
User authentication is powered by **Clerk**, ensuring secure and efficient user access while maintaining privacy.

### 3. **Modern and Intuitive UI**
Developed with **Shadcn UI**, PreppedUp provides a sleek, responsive, and easy-to-navigate interface for an exceptional user experience.

### 4. **Robust Data Management**
User progress, interview data, and performance metrics are securely stored in **Google Firebase Firestore**, offering a reliable, cloud-based solution for data management.

### 5. **Customizable Interview Experience**
Tailor your mock interview to suit various job roles, difficulty levels, and specific domains, ensuring a personalized interview experience.

---

## Technology Stack

- **Frontend**: React.js
- **Authentication**: Clerk
- **UI Framework**: Shadcn UI
- **Database**: Google Firebase Firestore
- **AI Integration**: Google Gemini AI

---

## Core Features

### 1. **AI-Powered Insights**
Receive real-time, AI-generated feedback on your interview performance, highlighting strengths, weaknesses, and areas that need improvement.

### 2. **Interactive Dashboard**
Track your interview progress, review past sessions, and download in-depth performance reports to monitor growth and identify trends.

### 3. **Diverse Question Types**
Engage with a variety of question formats, such as **multiple-choice**, **scenario-based questions**, and **technical coding challenges**, for a holistic interview preparation.


---

## Getting Started

To get started with PreppedUp, follow these simple steps:

1. **Clone the Repository:**

   ```
   git clone https://github.com/ChaithanyaKrishna28/PreppedUp.git
   ```


2. **Navigate to the project directory:**
    ``` 
    cd 
    ```
3. **Install dependencies**
    ``` 
    npm i -g pnpm
    pnpm install
    ```
4. **Start the development server**
    ```
    pnpm run dev
    ```
5. **Firebase Initialization**
    ```
    firebase init
    ```
6. **firebase deploy**
    ```
    firebase deploy
    ```
7. **Project Build**
    ```
    pnpm run build
    ```

## Environment Variable

### Ensure the following environment variables are set up in a .env file(create .env file in root directory):

    ```
    VITE_FIREBASE_API_KEY=YOUR_API_KEY_REF
    VITE_FIREBASE_AUTH_DOMAIN=YOUR_API_KEY_REF
    VITE_FIREBASE_PROJECT_ID=YOUR_API_KEY_REF
    VITE_FIREBASE_STORAGE_BUCKET=YOUR_API_KEY_REF
    VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_API_KEY_REF
    VITE_FIREBASE_APP_ID=YOUR_API_KEY_REF
    ```


---

## Author

**K. Chaithanya Krishna**

[LinkedIn Profile](https://www.linkedin.com/in/chaithanya-krishna28/)