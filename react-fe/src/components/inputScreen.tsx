import React from "react";

interface Props {
}

const InputScreen: React.FC<Props> = () => {
    return <div className="grow p-8 border-[#d8315b] border-2 rounded-lg bg-[#000]">
        <div className="p-4 bg-[#1e1b18] border-[#fffaff] border-2 rounded-lg">
        <h1 className="text-[#fffaff]">Input Screen</h1>
        </div>
    </div>
}

export default InputScreen