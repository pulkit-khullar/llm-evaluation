from fastapi import FastAPI
import uvicorn
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

@app.get('/api/health')
async def healthCheck():
    return {
        'Status': 'Healthy',
    }

if __name__=="__main__":
    port = int(os.getenv("PORT", 8001))
    uvicorn.run(app, host="0.0.0.0", port=port)
    print("Server is running on port:", port)