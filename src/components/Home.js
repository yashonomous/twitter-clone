import React from "react";
import Content from "./Content";
import RightBar from "./RightBar";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <div className="flex h-screen w-[80rem] gap-4 absolute top-0 bottom-0 left-0 right-0 m-auto">
      <Sidebar />
      <Content />
      <RightBar />
    </div>
  );
}

export default Home;
