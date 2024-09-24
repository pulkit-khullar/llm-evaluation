import React from "react";
import Charts from "./chart";

interface Props {
    response: object
}

const ResultScreen: React.FC<Props> = ({ response }) => {
    return <div className=" p-8 border-[#d8315b] border-2 rounded-lg bg-[#000]">
        <div className="p-4 bg-[#1e1b18] border-[#fffaff] border-2 rounded-lg">
            <h1 className="text-[#fffaff] ">Result | Score 1 denotes perfect</h1>
            <div className="mt-2 p-4 h-full bg-[#000] border-[#fffaff] border-2 rounded-lg text-[#fffaff] overflow-scroll">
                <pre className="text-pretty">
                    {JSON.stringify(response, null, 2)}
                </pre>
                <Charts result={response} />
            </div>
        </div>
    </div>
}

export default ResultScreen