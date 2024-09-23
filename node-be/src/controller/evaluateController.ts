import axios from "axios";
import { Request, Response } from "express";

export const evaluateBot = async (req: Request, res: Response) => {
    const { conversationHistory, userQuestion, botAnswer, metrics, context } = req.body;
    const contextList = context.split('\n') as string
    console.log(conversationHistory)
    console.log(userQuestion)
    console.log(botAnswer)
    console.log(contextList)
    console.log(metrics)

    try {
        const response = await axios.post(`http://${process.env.PY_PROJECT_HOST}/api/evaluate`, {
            conversationHistory,
            userQuestion,
            botAnswer,
            contextList,
            metrics
        });
        
        const result = response.data;
        res.status(200).json({
            message: 'Evaluation completed successfully',
            result
        });
    } catch (error) {
        console.error('Error during evaluation', error);
        res.status(500).json({ error: 'Evaluation failed' });
    }
}