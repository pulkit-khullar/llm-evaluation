import React from "react";

interface Props {
    response: object
}

const ResultScreen: React.FC<Props> = ({response}) => {
    return <div className="grow p-8 border-[#d8315b] border-2 rounded-lg bg-[#000]">
        <div className="p-4 bg-[#1e1b18] border-[#fffaff] border-2 rounded-lg">
            <h1 className="text-[#fffaff]">Result</h1>
            <div className="mt-2 p-4 bg-[#000] border-[#fffaff] border-2 rounded-lg text-[#fffaff]">
                <pre>{JSON.stringify(response, null, 2)}</pre>
            </div>
        </div>
    </div>
}

export default ResultScreen