import React from "react";

interface Props {
}

const Header: React.FC<Props> = () => {
    return <header className=' w-screen  p-4 m-0 bg-[#3e92cc] '>
        <h1 className="text-[#fffaff] text-xl font-medium"> LLM Evaluation Project</h1>
    </header>
}

export default Header