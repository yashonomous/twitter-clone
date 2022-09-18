import {
  HomeRounded,
  MailOutlineRounded,
  MoreHorizRounded,
  NotificationsNoneRounded,
  PersonOutlineRounded,
  SearchRounded,
} from "@material-ui/icons";
import React from "react";

function SidebarOption({ option }) {
  const getIcon = () => {
    if (option === "home") return <HomeRounded className="text-3xl" />;
    else if (option === "explore") return <SearchRounded />;
    else if (option === "notifications") return <NotificationsNoneRounded />;
    else if (option === "messages") return <MailOutlineRounded />;
    else if (option === "profile") return <PersonOutlineRounded />;
    else if (option === "more") return <MoreHorizRounded />;
  };

  return (
    <div className="flex   ">
      <div className="flex gap-4 py-3 pl-4 pr-6 rounded-full  ">
        <div>{getIcon()}</div>
        <div>
          <p className="text-xl">{option}</p>{" "}
        </div>
      </div>
    </div>
  );
}

export default SidebarOption;
