import React, { useState } from "react";
import InputScreen from "./inputScreen";
import ResultScreen from "./resultScreen";

interface Props {
}

const ScreenSplitter: React.FC<Props> = () => {
    const [response, setResponse] = useState<object>({});
    const [isLoading, setLoading] = useState<boolean>(false);
    const CallBE = (conversationHistory: string[], userQuestion: string, botAnswer: string, context: string, metrics: string[]) => {
        const raw = {
            conversationHistory,
            userQuestion,
            botAnswer,
            context,
            metrics,
        };

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(raw)
        };

        setLoading(true)

        fetch(`http://${process.env.REACT_APP_BE_HOST}/api/evaluate`, requestOptions)
            .then((response) => response.json())
            .then((result) => setResponse(result))
            .catch((error) => setResponse(error))
            .finally(() => setLoading(false));
    };

    return <div className="w-screen flex flex-row p-2 h-full">
        <div className="flex-1 overflow-hidden">
            <InputScreen callBE={CallBE} loading={isLoading}/>
        </div>
        <div className="flex-1 overflow-scroll">
            <ResultScreen response={response} />
        </div>
    </div>
}

export default ScreenSplitter