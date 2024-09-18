import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";
import Link from "next/link";
import React from "react";

export default async function Posts() {
  const posts = await prisma.post.findMany();
  return (
    <div className="bg-gray-800 w-[600px] min-h-[30vh]">
      {posts.map((post) => (
        <Link
          href={`/posts/${post.id}`}
          key={post.id}
          className="p-2 border-2 cursor-pointer">
          {post.title}
        </Link>
      ))}
    </div>
  );
}
