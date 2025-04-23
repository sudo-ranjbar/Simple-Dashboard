import ContentHeading from "@/components/layout/content-heading";
import ContentWrapper from "@/components/layout/content-wrapper";
import PostListView from "@/modules/posts/views/PostListView";
import Link from "next/link";
import { MdCreateNewFolder } from "react-icons/md";


export default function PostPage() {

  const title = "پست ها"
  return (
    <>
      <div className="flex items-center justify-between">
        <ContentHeading title={title} />

        <Link href="/posts/create" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-primary-hover focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          ایجاد پست جدید
          <MdCreateNewFolder className="size-5 mr-1.5" />
        </Link>
      </div>

      <ContentWrapper>
        <PostListView />
      </ContentWrapper>
    </>
  )

}