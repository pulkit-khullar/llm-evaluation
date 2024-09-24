import React from "react";

interface Props {
}

const ButtonScreen: React.FC<Props> = () => {
    return <div className="flex items-center justify-center p-2">
        <button className="p-2 border-[#d8315b] border-2 rounded-lg bg-[#d8315b] text-[#fffaff] font-medium">
            Evaluate
        </button>
    </div>
}

export default ButtonScreen