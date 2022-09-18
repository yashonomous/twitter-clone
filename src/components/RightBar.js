import { InputAdornment, TextField } from "@material-ui/core";
import { SearchRounded } from "@material-ui/icons";
import React from "react";

function RightBar() {
  return (
    <div className="flex-[0.29] flex flex-col gap-4 pt-2 ">
      <div className="flex items-center h-12 ">
        <div className=" flex-1 flex items-center h-12 rounded-3xl py-2 bg-twitter_cards_background ">
          <SearchRounded className="text-3xl ml-4" />
          <input
            className="flex-1 h-10 mr-4 bg-twitter_cards_background"
            type="search"
            placeholder="search"
          />
        </div>
      </div>

      <div className="">
        <div className="flex flex-col gap-4 bg-twitter_cards_background rounded-xl p-3">
          <div className="  ">
            <p className="text-xl font-extrabold ">what's happening</p>
          </div>

          <div className="flex">
            <div>
              <div className="flex gap-3 ">
                <p>entertainment</p>
                <p>live</p>
              </div>
              <div>
                <p>kapil sharma show is back with a new season</p>
              </div>
            </div>
            <div className="p-2">image</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
