"use client"

import ContentWrapper from "@/components/layout/content-wrapper"
import { useRouter } from "next/navigation"
import { useActionState, useEffect, useState } from "react"
import { toast } from "react-toastify"
import RichTextEditor from "./text-editor"
import SubmitButton from "@/components/ui/SubmitButton"
import editPost from "../actions/edit-post"



export default function EditPost({ post }) {

  const [body, setBody] = useState(post.post_content)

  const [state, formAction, isPending] = useActionState(editPost, {})

  const router = useRouter()

  useEffect(() => {

    toast(state?.message, { type: `${state?.status}` })

    if (state?.status === "success") {
      router.push("/posts")
    }

  }, [state])

  return (
    <>

      <ContentWrapper>

        <form action={formAction}>
          <div className="grid gap-6 mb-6 md:grid-cols-3 max-w-3xl">
            <div>
              <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">عنوان مقاله:</label>
              <input defaultValue={post.post_title} name="title" type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:text-white required " />
            </div>
            <div>
              <label htmlFor="author" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">نام نویسنده:</label>
              <input disabled defaultValue={post.post_author} name="author" type="text" id="author" className="cursor-not-allowed bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:text-white required " />
            </div>
            <div>
              <label htmlFor="post-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">نام مقاله:</label>
              <input defaultValue={post.post_name} name="post-name" type="text" id="post-name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:text-white required " />
            </div>
            <div>
              <label htmlFor="author-email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ایمیل نویسنده:</label>
              <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>
                <input disabled defaultValue={post.author.email} name="email" type="email" id="author-email" className="cursor-not-allowed bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@gmail.com" dir="ltr" />
              </div>
            </div>
            <div className="">
              <label htmlFor="categories" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">فهرست دسته بندی ها:</label>
              <select name="categories" id="categories" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option defaultValue="IN flight">پروازهای داخلی</option>
                <option defaultValue="US">United States</option>
                <option defaultValue="CA">Canada</option>
                <option defaultValue="FR">France</option>
                <option defaultValue="DE">Germany</option>
              </select>
            </div>
          </div>

          <div className="container py-8 max-w-6xl">
            <RichTextEditor content={body} onChange={setBody} />
            <input name="body" value={body} type="hidden" />
          </div>
          <input name="id" value={post.id} type="hidden" />
          <SubmitButton title={"ویرایش پست"} isPending={isPending} style="" />

        </form>

      </ContentWrapper>
    </>
  )

}
