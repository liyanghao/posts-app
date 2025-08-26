import type { PostType } from "@/data/types";
import { Button } from "@/components/ui/button";
import { TrashIcon, Pencil2Icon } from "@radix-ui/react-icons";

const Post = ({ post }: { post: PostType }) => {
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
        <div className="flex justify-end">
          <Button variant={"ghost"} size={"icon"}>
            <Pencil2Icon className="w-4 h-4" />
          </Button>
          <Button variant={"ghost"} size={"icon"}>
            <TrashIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <p className="p-4">{post.content}</p>
    </div>
  );
};

export default Post;
