import { useState } from "react";
import type { PostType } from "@/data/types";
import AddPost from "./add-post";
import Header from "./header";
import Posts from "./posts";

const Feed = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  return (
    <div className="flex flex-col w-full min-h-screen border-x">
      <Header />
      <AddPost setPosts={setPosts} />
      <Posts posts={posts} setPosts={setPosts} />
    </div>
  );
};

export default Feed;
