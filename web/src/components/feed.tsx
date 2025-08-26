import AddPost from "./add-post";
import Header from "./header";
import Posts from "./posts";
import { getShowAddPost } from "@/lib/store";

const Feed = () => {
  return (
    <div className="flex flex-col w-full min-h-screen border-x">
      <Header />
      {getShowAddPost() && <AddPost />}
      <Posts />
    </div>
  );
};

export default Feed;
