import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";
import Link from "next/link";
import React from "react";

export default async function Posts() {
  const posts = await prisma.post.findMany();
  return (
    <>
      {" "}
      <h1 className="text-3xl font-bold">
        Total post: {posts.length}
      </h1>
      <div className="bg-gray-800 w-[600px] min-h-[30vh] text-center p-5 flex flex-col gap-2">
        {posts.map((post) => (
          <Link
            href={`/posts/${post.slug}`}
            key={post.id}
            className="p-2 border-2 cursor-pointer w-full">
            {post.title}
          </Link>
        ))}
      </div>
    </>
  );
}
