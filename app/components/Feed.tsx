"use client";
import React from "react";
import { useEffect } from "react";
const Feed = (feed: any) => {
  useEffect(() => {
    console.log(feed);
  }, []);

  return <div>wow</div>;
};

export default Feed;
