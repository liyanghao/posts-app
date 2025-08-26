import type { PostType } from "@/data/types";
import PostActions from "./post-actions";

type PostProps = {
  post: PostType;
  setPosts: React.Dispatch<React.SetStateAction<PostType[]>>;
};

const Post = ({ post, setPosts }: PostProps) => {
  return (
    <div className="p-1 border-b">
      <div className="flex items-center justify-between pl-4">
        <div className="text-xs text-muted-foreground">
          {new Date(post.date).toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
          })}
        </div>
        <PostActions post={post} setPosts={setPosts} />
      </div>
      <p className="p-4">{post.content}</p>
    </div>
  );
};

export default Post;
