import { getFetch } from "@/utils/fetch";
import PostCard from "./PostCard";

export default async function PostListView({ params }) {

  const data = await getFetch(`http://127.0.0.1:8000/api/posts?${params}`)
  const posts = await data.data


  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-y-6 gap-x-6 lg:gap-x-0 ">
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
    </>
  )
}