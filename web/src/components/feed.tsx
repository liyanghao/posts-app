import AddPost from "./add-post";
import Header from "./header";
import Posts from "./posts";
import { $showAddPost } from "@/lib/store";
import { useStore } from "@nanostores/react";

const Feed = () => {
  const showAddPost = useStore($showAddPost);

  return (
    <div className="flex flex-col w-full min-h-screen border-x">
      <Header />
      {showAddPost && <AddPost />}
      <Posts />
    </div>
  );
};

export default Feed;
