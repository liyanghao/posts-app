import { Button } from "@/components/ui/button";
import { deletePost } from "@/data/api";
import type { PostType } from "@/data/types";
import { TrashIcon, Pencil2Icon } from "@radix-ui/react-icons";

type PostActionsProps = {
  post: PostType;
  setPosts: React.Dispatch<React.SetStateAction<PostType[]>>;
};

const PostActions = ({ post, setPosts }: PostActionsProps) => {
  const handleDelete = async () => {
    await deletePost(post.id);
    setPosts((prevPosts: PostType[]) =>
      prevPosts.filter((p: PostType) => p.id !== post.id),
    );
  };

  return (
    <div className="flex justify-end">
      <Button variant={"ghost"} size={"icon"}>
        <Pencil2Icon className="w-4 h-4" />
      </Button>
      <Button variant={"ghost"} size={"icon"} onClick={handleDelete}>
        <TrashIcon className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default PostActions;
