# LLM Evaluation Project

This project evaluates AI conversation bots using multiple metrics. The project consists of a **Node.js** app (TypeScript), a **FastAPI** app (Python 3.12), and a **Docker** setup.

## Prerequisites

- Docker and Docker Compose
- Python 3.12
- Node.js 20+

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/pulkit-khullar/llm-evaluation.git
   cd llm-evaluation
   ```

2. Build and start the services:
   ```bash
   docker-compose up --build
   ```

3. Access the **Node.js app** on `http://localhost:3000` and the **FastAPI app** on `http://localhost:8001`.

## Directory Structure

- `/node-app`: Node.js (TypeScript) service.
- `/py-be`: FastAPI service.

## Docker Services

- **Node.js**: Runs the frontend and handles API requests.
- **FastAPI**: Evaluates conversation metrics.

---

Feel free to adjust the file for any extra steps!