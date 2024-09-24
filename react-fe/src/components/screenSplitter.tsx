import React from "react";
import InputScreen from "./inputScreen";
import ButtonScreen from "./buttonScreen";
import ResultScreen from "./resultScreen";

interface Props {
}

const ScreenSplitter: React.FC<Props> = () => {
    return <div className="w-screen flex flex-row p-4 h-full">
        <InputScreen/>
        <ButtonScreen/>
        <ResultScreen/>
    </div>
}

export default ScreenSplitter