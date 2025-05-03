
// import EditProduct from "@/components/products/Edit";
import EditPost from "@/modules/posts/components/EditPost";
import { getFetch } from "@/utils/fetch";

export default async function EditPostPage({ params }) {

  const dynParam = await params
  const id = await dynParam.id

  const post = await getFetch(`http://127.0.0.1:8000/api/posts/${id}`);

  
  return (
    <>
      <EditPost post={post} />
    </>
  )
}