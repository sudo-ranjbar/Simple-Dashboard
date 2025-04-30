import Image from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";

export default function PostCard({ post }) {

  const cleanContent = DOMPurify.sanitize(post.post_content, { ALLOWED_TAGS: [] })

  return (

    <div className="w-2xs bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <Image className="rounded-t-lg" src="/images/posts/image-1.jpg" alt="post-image" width={1000} height={100} />
      <div className="p-5">
        <Link href="#">
          <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white hover:text-primary">
            {post.post_title}
          </h5>
        </Link>
        <div className="mb-3 text-sm line-clamp-2 font-normal text-gray-700 dark:text-gray-400 text-justify tracking-tight">
          {cleanContent}
        </div>
        <Link href={`/posts/edit/${post.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-primary-hover focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          بیشتر
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </Link>
      </div>
    </div>

  )
}