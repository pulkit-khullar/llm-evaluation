from fastapi import FastAPI
from pydantic import BaseModel
import uvicorn
import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

app = FastAPI()

@app.get('/api/health')
async def healthCheck():
    return {
        'Status': 'Healthy',
    }

class EvaluationRequest(BaseModel):
    conversationHistory: list[str]
    userQuestion: str
    botAnswer: str
    metrics: list[str]

@app.post('/api/evaluate')
async def evaluate(request: EvaluationRequest):
    conversation_history = request.conversationHistory
    user_question = request.userQuestion
    bot_answer = request.botAnswer
    metrics = request.metrics

    evaluation_results = {}

    if 'answer_relevance' in metrics:
        response = client.chat.completions.create(
            model="gpt-4o",
            temperature=0,
            messages=[
                {"role": "system", "content": "Evaluate the relevance of this bot response."},
                {"role": "user", "content": user_question},
                {"role": "assistant", "content": bot_answer},
            ]
        )
        evaluation_results['answer_relevance'] = response

    # # Log results to MLflow
    # with mlflow.start_run() as run:
    #     for metric, score in evaluation_results.items():
    #         mlflow.log_metric(metric, float(score))

    return evaluation_results

if __name__=="__main__":
    port = int(os.getenv("PORT", 8001))
    uvicorn.run(app, host="0.0.0.0", port=port)
    print("Server is running on port:", port)