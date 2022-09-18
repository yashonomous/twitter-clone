import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import {
  AccountCircleRounded,
  AddAPhoto,
  CropOriginalRounded,
  EqualizerRounded,
  GifRounded,
  LocationOnRounded,
  NewReleasesRounded,
  ScheduleRounded,
  SentimentSatisfiedAltRounded,
} from "@material-ui/icons";
import React, { useState } from "react";

function Content() {
  const [showScope, setShowScope] = useState(false);

  return (
    <div className="flex-[0.49] flex flex-col mr-4">
      <div>
        <div className="flex">
          <div className="flex-[0.9] py-3 ml-4">
            <p className="text-2xl">home</p>
          </div>
          <div className="flex-[0.1] flex justify-end items-center">
            <div>
              <NewReleasesRounded className="text-3xl " />
            </div>
          </div>
        </div>
      </div>

      <div className="flex ">
        <div>
          <AccountCircleRounded className="text-6xl" />
        </div>

        <div className="flex-1">
          {showScope && (
            <div className="p-2  ">
              <select
                className="text-sm text-twitter_blue_primary  px-2 cursor-pointer rounded-xl border border-solid hover:bg-twitter_blue_hover "
                name="cars"
                id="cars"
              >
                <option value="volvo">everyone</option>
                <option value="saab">twitter circle</option>
              </select>
            </div>
          )}

          <div className="py-3 px-3">
            <input
              className="w-full"
              type="text"
              placeholder="what's happening?"
              onFocus={() => {
                setShowScope(true);
              }}
            />
          </div>

          {showScope && (
            <div className="p-2  ">
              <select
                className="text-sm text-twitter_blue_primary  px-2 cursor-pointer rounded-xl border border-solid hover:bg-twitter_blue_hover "
                name="cars"
                id="cars"
              >
                <option value="volvo">everyone can reply</option>
                <option value="saab">people you follow</option>
                <option value="saab">people you mention</option>
              </select>
            </div>
          )}

          <div className="flex justify-between items-stretch">
            <div className="flex gap-2 text-twitter_blue_primary py-2">
              <CropOriginalRounded />
              <GifRounded />
              <EqualizerRounded />
              <SentimentSatisfiedAltRounded />
              <ScheduleRounded />
              <LocationOnRounded />
            </div>
            <div className=" w-[5rem] flex items-stretch bg-twitter_blue_disabled text-white text-center rounded-full">
              <button className=" w-full rounded-2xl ">tweet</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
