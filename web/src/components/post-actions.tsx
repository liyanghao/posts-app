import { Button } from "@/components/ui/button";
import type { PostType } from "@/data/types";
import { Pencil2Icon } from "@radix-ui/react-icons";
import DeletePostDialog from "./delete-post-dialog";

type PostActionsProps = {
  post: PostType;
  setPosts: React.Dispatch<React.SetStateAction<PostType[]>>;
};

const PostActions = ({ post, setPosts }: PostActionsProps) => {
  return (
    <div className="flex justify-end">
      <Button variant={"ghost"} size={"icon"}>
        <Pencil2Icon className="w-4 h-4" />
      </Button>
      <DeletePostDialog post={post} setPosts={setPosts} />
    </div>
  );
};

export default PostActions;
