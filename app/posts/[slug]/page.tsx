import prisma from "@/lib/db";
import React from "react";

export default async function page({ params }) {
  const post = await prisma.post.findUnique({
    where: {
      slug: params.slug,
    },
  });

  return (
    <div className="p-9">
      <h1 className="text-xl">{post?.slug}</h1>
    </div>
  );
}
