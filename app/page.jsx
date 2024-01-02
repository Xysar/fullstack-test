import Image from "next/image";
import prisma from "../lib/prisma";

import Post from "./components/Post";

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
    <div className="bg-black p-12">
      <h1 className="text-white text-4xl pb-12">Public Feed</h1>
        <div className="">
          {feed.props.feed.map((post) =>(<Post key={post.id} author="wow" content ="wowee"  title="wowee"/>
          ))}
          
        </div>
     
    </div>
  );
}
