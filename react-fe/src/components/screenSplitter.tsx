import React, { useState } from "react";
import InputScreen from "./inputScreen";
import ButtonScreen from "./buttonScreen";
import ResultScreen from "./resultScreen";

interface Props {
}

const ScreenSplitter: React.FC<Props> = () => {
    const [response, setResponse] = useState<object>({});
    const [isLoading, setLoading] = useState<boolean>(false);
    const CallBE = (conversationHistory: string[], userQuestion: string, botAnswer: string, context: string, metrics: string[]) => {
        console.log({ conversationHistory, userQuestion, botAnswer, context, metrics })
        // const raw = {
        //     conversationHistory: [
        //         "Olympic were hosted in Tokyo in 2020"
        //     ],
        //     userQuestion: "where was olympic hosted in 2020?",
        //     botAnswer: "Olympic were hosted in Tokyo",
        //     context: "Here the user is querying about the Olympics that took place in recent years. In 2020 it was hosted in Tokyo, in 2024 in Paris and 2016 - Rio de Janeiro",
        //     metrics: "contextual_relevancy"
        // };

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
        {/* <ButtonScreen/> */}
        <div className="flex-1 overflow-hidden">
            <ResultScreen response={response} />
        </div>
    </div>
}

export default ScreenSplitter