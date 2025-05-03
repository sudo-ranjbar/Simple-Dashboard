"use server"

import { putFetch } from "@/utils/fetch"
import { handleError } from "@/utils/helper"
import { revalidatePath } from "next/cache";

export default async function editPost(state, formData) {

  const id = formData.get('id')
  const title = formData.get('title')
  const postName = formData.get('post-name')
  const body = formData.get('body')
  const author = formData.get('author')
  const email = formData.get('email')
  const categories = formData.get('categories')

  if (title === '') {
    return {
      status: "error",
      message: "فیلد عنوان الزامی است"
    }
  }
  if (postName === '') {
    return {
      status: "error",
      message: "فیلد نام مقاله الزامی است"
    }
  }
  if (body === '') {
    return {
      status: "error",
      message: "فیلد متن الزامی است"
    }
  }


  const data = await putFetch(`http://127.0.0.1:8000/api/posts/${id}`,
    {
      post_title: title,
      post_content: body,
      post_type: "post",
      post_status: "draft"
    },
  )

  if (data.status === 'success') {
    revalidatePath('/products');
    return {
      status: data.status,
      message: "مقاله با موفقیت ویرایش شد"
    }
  } else {
    return {
      status: data.status,
      message: handleError(data.message)
    }
  }


}