"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluateBot = void 0;
const axios_1 = __importDefault(require("axios"));
const evaluateBot = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { conversationHistory, userQuestion, botAnswer, metrics, context } = req.body;
    const contextList = context.split('\n');
    console.log(conversationHistory);
    console.log(userQuestion);
    console.log(botAnswer);
    console.log(contextList);
    console.log(metrics);
    try {
        const response = yield axios_1.default.post('http://localhost:8001/api/evaluate', {
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
    }
    catch (error) {
        console.error('Error during evaluation', error);
        res.status(500).json({ error: 'Evaluation failed' });
    }
});
exports.evaluateBot = evaluateBot;
