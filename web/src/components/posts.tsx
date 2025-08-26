import { useEffect, useState } from "react";
import type { PostType } from "@/data/types";
import Post from "./post";
import { fetchPosts } from "@/data/api";

const Posts = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

   useEffect(() => {
     fetchPosts().then((data) => setPosts(data));
   }, []);

  return (
    <div>
      {posts
        .sort((a, b) => (a.date > b.date ? -1 : 1))
        .map((post) => (
          <Post key={post.id} post={post} />
        ))}
    </div>
  );
};

export default Posts;
