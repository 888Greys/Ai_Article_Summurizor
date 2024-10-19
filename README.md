<div align="center">
  <br />
    <a href="" target="_blank">
      <img src="\src\assets\mp.png" alt="ai article summarizer Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Redux-black?style=for-the-badge&logoColor=white&logo=redux&color=764ABC" alt="redux" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">AI Article Summarizer</h3>

   <div align="center">
     An AI-powered article summarizer that simplifies your reading by providing concise summaries of lengthy articles. Built using React JS, Vite, TailwindCSS, and Redux Toolkit, this application showcases modern frontend development techniques and efficient API integration.
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🚀 [Features](#features)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [highlights](#highlights)
4. 🤸 [Quick Start](#quick-start)


## <a name="features">🚀 Features</a>

👉 **Responsive Design**: Beautiful and responsive UI/UX with glassmorphism design using Tailwind CSS.

👉 **RTK Query for API Requests**: Efficiently makes conditional API requests using Redux Toolkit Query (RTK Query).

👉 **Local Storage Integration**: Save your summarized article history locally, allowing for offline access to past summaries.

👉 **Form Handling & Error Catching**: Properly handle form events and gracefully catch any API or user input errors.

👉 **Copy to Clipboard**: Quickly copy summarized text to the clipboard with one click.

👉 **Clean and Scalable Codebase**: The project is built with a structured and scalable architecture to ensure maintainability.




## <a name="tech-stack">⚙️ Tech Stack</a>

- React.js
- TypeScript
- Redux Toolkit
- Tailwind CSS

## <a name="highlights">🔋 Project Highlights</a>

1. **Setting Up a React Project with Vite:**
Vite offers an extremely fast development environment for modern frontend applications, making the development process smoother and faster.

2. **Creating a Beautiful UI with Tailwind CSS:**
The app features a sleek glassmorphism UI, offering a visually appealing interface while maintaining responsiveness across all devices.

3. **Making Conditional API Requests with RTK Query:**
Utilizing RTK Query, API requests are only fired under certain conditions, ensuring optimized network usage and efficient state management.

4. **Saving History to Local Storage:**
User's article summaries are saved in the browser's local storage, allowing users to revisit past summaries even when offline.

5. **Handling Forms and Errors:**
All form submissions are managed effectively, with built-in error handling to manage user input and API errors gracefully.

6.  **to Clipboard Feature:**
Users can easily copy summaries to their clipboard with a single click, improving the user experience.

7. **Scalable and Clean Code:**
The app's codebase is organized in a modular and scalable manner, following best practices for frontend development.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/888Greys/Ai_Article_Summurizor.git
cd Ai_Article_Summurizor
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
VITE_RAPID_API_ARTICLE_KEY=
```

Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up on the [Rapid API website](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbnl0Y19rRTVjYWNwVTZjSmR5QzBYQVF5cXJmUXxBQ3Jtc0tuS1prb052VWw2ZmdzcVhCeGpzS3MtTWNxUnVWNjZjMFR5akxFLThFNjlLcW5IaGd5QkR5ZkxXQVYxdVljZFBRTzV1TWN4dktRblUtenlGQ21RcHoxcGgtTEhKREh1STB6LWFfcnVKaTJIandrRWFsYw&q=https%3A%2F%2Frapidapi.com%2Frestyler%2Fapi%2Farticle-extractor-and-summarizer%3Futm_source%3Dyoutube.com%2FJavaScriptMastery%26utm_medium%3Dreferral%26utm_campaign%3DDevRel&v=vpvtZZi5ZWk).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.
