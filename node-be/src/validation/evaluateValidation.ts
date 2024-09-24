import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export const allowedMetrics = {
    ANSWER_RELEVANCE: 'answer_relevance',
    BIAS: 'bias',
    CONTEXTUAL_RELEVANCY: 'contextual_relevancy',
    FAITHFULNESS: 'faithfulness',
    HALLUCINATION: 'hallucination',
    SUMMARIZATION: 'summarization',
}

const evaluationSchema = Joi.object({
    conversationHistory: Joi.array().items(Joi.string()).required(),
    userQuestion: Joi.string().required(),
    botAnswer: Joi.string().required(),
    context: Joi.string().required(),
    metrics: Joi.array().items(Joi.string().valid(...Object.values(allowedMetrics))).required()
});

export const validateEvaluation = (req: Request, res: Response, next: NextFunction) => {
    const { error } = evaluationSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};
