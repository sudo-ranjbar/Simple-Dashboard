"use server"

import { postFetch } from "@/utils/fetch"
import { handleError } from "@/utils/helper"

export default async function createPost(state, formData) {

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
  if (author === '') {
    return {
      status: "error",
      message: "فیلد نویسنده الزامی است"
    }
  }
  if (email === '') {
    return {
      status: "error",
      message: "فیلد ایمیل الزامی است"
    }
  }



  const data = await postFetch("http://127.0.0.1:8000/api/posts",
    {
      post_title: title,
      post_name: postName,
      post_content: body,
      post_type: "post",
      post_status: "publish"
    },
    { 'Authorization': 'Bearer 2|s4WMKbnmwHNeNHR4XSSiI3ZnfVcjCPzT4KyBc5oD004367e6' }
  )

  if (data.status === 'success') {
    return {
      status: data.status,
      message: "مقاله با موفقیت ثبت شد"
    }
  } else {
    return {
      status: data.status,
      message: handleError(data.message)
    }
  }

}