import { Button } from "@material-ui/core";
import {
  AccountCircleRounded,
  MoreHorizOutlined,
  Twitter,
} from "@material-ui/icons";
import React, { useState } from "react";
import SidebarOption from "./SidebarOption";

const SIDEBAR_OPTIONS = [
  "home",
  "explore",
  "notifications",
  "messages",
  "profile",
  "more",
];

function Sidebar() {
  
  return (
    <div className="flex-[0.21] flex flex-col justify-between ">
      <div className="flex flex-col gap-2">
        <Twitter className="text-twitter_blue_primary text-4xl  border rounded-[50%] m-2 " />

        {SIDEBAR_OPTIONS.map((option) => (
          <SidebarOption key={option} option={option} />
        ))}

        <div className="flex-1 w-[90%] ">
          <Button className=" bg-twitter_blue_primary lowercase text-white w-full rounded-full py-3 ">
            tweet
          </Button>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-1 rounded-full py-3 pl-3 justify-center items-center ">
          <div className="flex flex-[0.8]">
            <AccountCircleRounded className="text-5xl" />
            <div className="flex-1 flex flex-col">
              <p>yashaswi soni</p>
              <p className="text-gray-500">@yashaswi68</p>
            </div>
          </div>
          <div className="flex-[0.2] flex justify-end">
            <MoreHorizOutlined />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
