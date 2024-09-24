import React from "react";
import Header from "./header";
import ScreenSplitter from "./screenSplitter";

interface Props {
}

const HomePage: React.FC<Props> = () => {
    return <div className='flex flex-col w-screen h-screen p-0 m-0 bg-[#0a2463] '>
        <Header />
        <ScreenSplitter />
    </div>
}

export default HomePage