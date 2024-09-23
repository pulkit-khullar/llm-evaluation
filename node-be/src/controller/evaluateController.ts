import axios from "axios";
import { Request, Response } from "express";

export const evaluateBot = async (req: Request, res: Response) => {
    const { conversationHistory, userQuestion, botAnswer, metrics } = req.body;

    console.log(conversationHistory)
    console.log(userQuestion)
    console.log(botAnswer)
    console.log(metrics)

    try {
        const response = await axios.post('http://localhost:8001/api/evaluate', {
            conversationHistory,
            userQuestion,
            botAnswer,
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