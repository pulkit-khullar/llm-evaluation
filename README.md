# LLM Evaluation Project

This project evaluates AI conversation bots using multiple predefined metrics such as answer relevance, faithfulness, summarization, and more. It includes:
- **Node.js (TypeScript) Backend** for managing evaluation requests.
- **FastAPI (Python 3.12)** for running evaluations and handling metrics.
- **React Frontend** for inputting conversation data and displaying results.
- **Docker** to containerize and orchestrate the services.

## Prerequisites
- **Node.js**: 20 or above
- **Python**: 3.12
- **Docker** and **Docker Compose**

## Project Structure
```
.
├── node-be         # Node.js backend for API requests and metrics evaluation
├── py-be           # FastAPI app handling LLM metrics evaluation logic
├── react-fe        # React frontend for user input and displaying results
├── docker-compose.yml  # Docker setup for orchestrating services
```

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/pulkit-khullar/llm-evaluation.git
cd llm-evaluation
```

### 2. Environment Setup

Note - Convert env.example to .env before procedding further.

#### Backend (Node.js & FastAPI)
- **Node.js**:
  1. Navigate to `node-be/`.
  2. Install dependencies:
     ```bash
     npm install
     ```
  3. Run the Node.js backend locally:
     ```bash
     npm run dev
     ```

- **FastAPI**:
  1. Navigate to `py-be/`.
  2. Install dependencies using **Poetry**:
     ```bash
     poetry install
     ```
  3. Run FastAPI app locally:
     ```bash
     poetry shell
     python main.py
     ```

#### Frontend (React)
1. Navigate to `react-fe/`.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the React app locally:
   ```bash
   npm start
   ```

### 3. Docker Setup

1. Build and start all services:
   ```bash
   docker-compose up --build
   ```
2. Access the services:
   - **Node.js Backend**: `http://localhost:8003`
   - **FastAPI Backend**: `http://localhost:8004`
   - **React Frontend**: `http://localhost:3000`

## Usage

- **React Frontend**: Enter conversation history, user questions, bot answers, and context. Select desired metrics for evaluation and submit.
- **Node.js Backend**: Receives the frontend request and forwards the evaluation tasks to the FastAPI service.
- **FastAPI Service**: Processes evaluation metrics like `answer_relevance`, `summarization`, etc., and returns the results to the Node.js backend.

## Metrics Supported
1. **Answer Relevance**
2. **Bias**
3. **Contextual Relevancy**
4. **Faithfulness**
5. **Hallucination**
6. **Summarization**

## API Doc

### Node Backend

```
GET /api/health
```
Application health check

```
POST /api/evaluate

REQUEST BODY:
conversationHistory: Array of String
userQuestion: String
botAnswer: String
context: String
metrics: Array of String | Allowed values are - answer_relevance, bias, contextual_relevancy, faithfulness, hallucination, summarization

RESPONSE BODY:
{
  message: "Evaluation completed successfully",
  result: {
    ...Metrics names and there scores along with explanation
  }
}
```
Application Evaluate end-point, This add's the first level request validation at this point.
This also forwards the request to Python service for result evaluation.

### Python Backend

```
GET /api/health
```
Application health check

```
POST /api/evaluate

REQUEST BODY:
conversationHistory: Array of String
userQuestion: String
botAnswer: String
context: Array of String
metrics: Array of String

RESPONSE BODY
{
  metric_name: {
    score: ...result score,
    reson: ...explanation of result score.
  },
  metric_name_2: {
    score: ...result score,
    reson: ...explanation of result score.
  },
  ...
}
```
Application Evaluate end-point, This is responsible for processing the evaluation for the selected metrics.
This formats the result and send the JSON object to the Node service, which then further send's the result back to React service.

## Known Issues
- Ensure all services are running for full functionality.
- Adjust port settings in `docker-compose.yml` if conflicts arise.
