"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEvaluation = void 0;
const joi_1 = __importDefault(require("joi"));
const evaluationSchema = joi_1.default.object({
    conversationHistory: joi_1.default.array().items(joi_1.default.string()).required(),
    userQuestion: joi_1.default.string().required(),
    botAnswer: joi_1.default.string().required(),
    context: joi_1.default.string().required(),
    metrics: joi_1.default.array().items(joi_1.default.string()).required()
});
const validateEvaluation = (req, res, next) => {
    const { error } = evaluationSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};
exports.validateEvaluation = validateEvaluation;
