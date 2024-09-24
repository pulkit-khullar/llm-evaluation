from fastapi import FastAPI
from pydantic import BaseModel
import uvicorn
import os
from dotenv import load_dotenv
from openai import OpenAI
from metrics import answerRelevance, summarization

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
    contextList: list[str]
    metrics: list[str]

@app.post('/api/evaluate')
async def evaluate(request: EvaluationRequest):
    conversation_history = request.conversationHistory
    user_question = request.userQuestion
    bot_answer = request.botAnswer
    context = request.contextList
    metrics = request.metrics

    evaluation_results = {}
    
    if 'answer_relevance' in metrics:
        result = answerRelevance.AnswerRelevancy(
            user_input=user_question, 
            bot_output=bot_answer, 
            llm_context=context, 
            chat_history=conversation_history
        )
        evaluation_results['answer_relevance'] = {
            'score': result.score,
            'reason': result.reason
        }
    
    if 'bias' in metrics:
        result = summarization.Summarization(
            user_input=user_question, 
            bot_output=bot_answer, 
            llm_context=context, 
            chat_history=conversation_history
        )
        evaluation_results['bias'] = {
            'score': result.score,
            'reason': result.reason
        }
    
    if 'contextual_relevancy' in metrics:
        result = summarization.Summarization(
            user_input=user_question, 
            bot_output=bot_answer, 
            llm_context=context, 
            chat_history=conversation_history
        )
        evaluation_results['contextual_relevancy'] = {
            'score': result.score,
            'reason': result.reason
        }

    if 'faithfulness' in metrics:
        result = summarization.Summarization(
            user_input=user_question, 
            bot_output=bot_answer, 
            llm_context=context, 
            chat_history=conversation_history
        )
        evaluation_results['faithfulness'] = {
            'score': result.score,
            'reason': result.reason
        }

    if 'hallucination' in metrics:
        result = summarization.Summarization(
            user_input=user_question, 
            bot_output=bot_answer, 
            llm_context=context, 
            chat_history=conversation_history
        )
        evaluation_results['hallucination'] = {
            'score': result.score,
            'reason': result.reason
        }

    if 'summarization' in metrics:
        result = summarization.Summarization(
            user_input=user_question, 
            bot_output=bot_answer, 
            llm_context=context, 
            chat_history=conversation_history
        )
        evaluation_results['summarization'] = {
            'score': result.score,
            'reason': result.reason
        }
        
    return evaluation_results

if __name__=="__main__":
    port = int(os.getenv("PORT", 8001))
    uvicorn.run(app, host="0.0.0.0", port=port)
    print("Server is running on port:", port)