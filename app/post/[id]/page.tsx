import React from "react";
import prisma from "@/lib/prisma";

async function findPostById(postId: string) {
  const post = await prisma.post.findUnique({
    where: {
      id: String(postId),
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: post,
  };
}

export default function Page({ params }: { params: { id: string } }) {
  const currentPost = findPostById(params.id);

  return <div></div>;
}
