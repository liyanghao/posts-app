import { Button } from "@/components/ui/button";
import { useState } from "react";

interface PostType {
  id: string;
  content: string;
  date: string;
}

const Feed = () => {
  const [posts] = useState<PostType[]>([
    {
      id: "1",
      content: "Do only what only you can do.",
      date: "2024-06-24T12:00:00Z",
    },
    {
      id: "2",
      content:
        "Elegance is not a dispensable luxury but a factor that decides between success and failure.",
      date: "2024-06-25T12:00:00Z",
    },
    {
      id: "3",
      content:
        "The question of whether computers can think is like the question of whether submarines can swim.",
      date: "2024-06-26T12:00:00Z",
    },
  ]);

  return (
    <div className="flex flex-col w-full min-h-screen border-x">
      <div className="flex justify-center gap-3 p-1 border-b">
        <Button variant={"link"}>My Posts</Button>
        <Button variant={"link"} disabled={true}>
          All Posts
        </Button>
      </div>
      <div>
        {posts
          .sort((a, b) => (a.date > b.date ? -1 : 1))
          .map((post) => (
            <div key={post.id} className="border-b p-4">
              {post.content}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Feed;
