import React, { useState } from "react";

interface Props {
    callBE: (conversationHistory: string[], userQuestion: string, botAnswer: string, context: string, metrics: string[]) => void;
    loading: boolean;
}

const InputScreen: React.FC<Props> = ({ callBE, loading }) => {
    const [conversationHistory, setConversationHistory] = useState<string>("");
    const [userQuestion, setUserQuestion] = useState<string>("");
    const [botAnswer, setBotAnswer] = useState<string>("");
    const [context, setContext] = useState<string>("");
    const [selectedMetrics, setSelectedMetrics] = useState<string[]>([]);

    const metrics = [
        { displayName: "Answer Relevance", value: "answer_relevance" },
        { displayName: "Bias", value: "bias" },
        { displayName: "Contextual Relevancy", value: "contextual_relevancy" },
        { displayName: "Faithfulness", value: "faithfulness" },
        { displayName: "Hallucination", value: "hallucination" },
        { displayName: "Summarization", value: "summarization" }
    ];

    const handleMetricChange = (metric: string) => {
        setSelectedMetrics((prev) =>
            prev.includes(metric) ? prev.filter((m) => m !== metric) : [...prev, metric]
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        callBE(conversationHistory.split('\n'),
            userQuestion,
            botAnswer,
            context,
            selectedMetrics,)
    };

    return <div className="p-4 border-[#d8315b] border-2 rounded-lg bg-[#000] mr-4">
        <div className="p-2 bg-[#1e1b18] border-[#fffaff] border-2 rounded-lg text-[#fffaff]">
            <h2 className="text-2xl font-semibold mb-2">Conversation Evaluation</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="conversationHistory" className="block font-medium">Conversation History</label>
                    <textarea
                        id="conversationHistory"
                        className="w-full border p-2 text-[#000]"
                        value={conversationHistory}
                        onChange={(e) => setConversationHistory(e.target.value)}
                        rows={4}
                    />
                </div>

                <div>
                    <label htmlFor="userQuestion" className="block font-medium">User Question</label>
                    <input
                        type="text"
                        id="userQuestion"
                        className="w-full border p-2 text-[#000]"
                        value={userQuestion}
                        onChange={(e) => setUserQuestion(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="botAnswer" className="block font-medium">Bot Answer</label>
                    <input
                        type="text"
                        id="botAnswer"
                        className="w-full border p-2 text-[#000]"
                        value={botAnswer}
                        onChange={(e) => setBotAnswer(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="context" className="block font-medium">Context</label>
                    <input
                        type="text"
                        id="context"
                        className="w-full border p-2 text-[#000]"
                        value={context}
                        onChange={(e) => setContext(e.target.value)}
                    />
                </div>

                <div>
                    <h3 className="font-medium">Select Metrics</h3>
                    <div className="space-y-2">
                        {metrics.map((metric) => (
                            <label key={metric.value} className="flex items-center">
                                <input
                                    type="checkbox"
                                    value={metric.value}
                                    onChange={() => handleMetricChange(metric.value)}
                                    checked={selectedMetrics.includes(metric.value)}
                                    className="mr-2"
                                />
                                {metric.displayName}
                            </label>
                        ))}
                    </div>
                </div>

                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded" disabled={loading}>
                    {
                        !loading ?
                            'Evaluate' :
                            <>
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                Processing...
                            </>
                    }
                </button>
            </form>
        </div>
    </div>
}

export default InputScreen