Here’s a clean, beginner‑friendly **README.md** you can drop into your Git repo. It explains what your app does, how to run it, and how to configure environment variables:

```markdown
# Simple Chat Application

A lightweight web chat application built with **Spring Boot** and a modern frontend.  
It integrates with **OpenAI (gpt-4.1-mini-2025-04-14)** to provide intelligent, conversational responses.

---

## ✨ Features
- Real‑time chat interface with a clean UI
- Backend powered by Spring Boot
- Integration with OpenAI GPT for responses
- Environment‑based configuration (API keys, URLs)
- Easy deployment on platforms like Render

---

## 🚀 Getting Started

### Prerequisites
- Java 17+
- Maven or Gradle
- An OpenAI API key

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/mumashankar/Maatala-Petti
   cd Maatala-Petti
   ```

2. Create a `.env` file in the project root:
   ```env
   API_URL=https://api.openai.com/v1/chat/completions
   API_KEY=your_openai_api_key
   ```

3. Build and run the application:
   ```bash
   ./mvnw spring-boot:run
   ```
   or
   ```bash
   ./gradlew bootRun
   ```

4. Open your browser at:
   ```
   http://localhost:8080
   ```

Dockerfile is used for building in Render.


---

## ⚙️ Deployment on Render
- Push your code to GitHub.
- Create a new **Web Service** on Render and connect your repo.
- In Render’s **Environment tab**, add the same variables from `.env`:
    - `API_URL`
    - `API_KEY`
- Render will inject these at runtime, so the app works without a `.env` file.

---

## 📂 Project Structure
```
src/
 ├─ main/
 │   ├─ java/...        # Spring Boot backend
 │   └─ resources/...   # Templates, static files
 └─ test/...            # Unit tests
```

---

## 🛡️ Notes
- Do **not** commit your `.env` file to GitHub. Add it to `.gitignore`.
- Use Render’s environment settings for production secrets.
- This project is for learning/demo purposes.

---

