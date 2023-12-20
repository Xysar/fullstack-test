import Image from "next/image";
import prisma from "../lib/prisma";
import Feed from "./components/Feed";


async function getFeed() {
  const feed = await prisma.post.findMany({
    where: {
      published: true,
    },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });
  return {
    props: { feed },
    revalidate: 10,
  };
}

export default async function Home() {
  const feed = await getFeed();

  return (
    <div className="bg-black">
      <Feed feed={feed}></Feed>
      <p className="text-white">Wowzers</p>
    </div>
  );
}
