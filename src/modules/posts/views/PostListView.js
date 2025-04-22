import PostCard from "../components/PostCard";

export default function PostListView() {
  let myList = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-y-6 gap-x-6 lg:gap-x-0 ">
        {myList.map((i, j) => (
          <PostCard key={j} />
        ))}
      </div>
    </>
  )
}