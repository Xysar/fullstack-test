"use client";
import React from "react";

const Post = ({
  author,
  content,
  title,
}: {
  author: string;
  content: string;
  title: string;
}) => {
  return (
    <div className="bg-white  p-4 text-black w-[400px]">
      <h2 className="font-bold">{title}</h2>
      <p className="">{content}</p>
      <p className="">By {author}</p>
    </div>
  );
};

export default Post;
