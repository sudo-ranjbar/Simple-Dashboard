import ContentHeading from "@/components/layout/content-heading";
import ContentWrapper from "@/components/layout/content-wrapper";
import PostListView from "@/modules/posts/views/PostListView";


export default function PostPage() {

  const title = "پست ها"
  return (
    <>
      <ContentHeading title={title} />
      
      <ContentWrapper>
        <PostListView />
      </ContentWrapper>
    </>
  )

}