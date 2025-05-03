"use server"

import { postFetch } from "@/utils/fetch"
import { handleError } from "@/utils/helper"
import { cookies } from "next/headers"




export default async function login(state, formData) {

  const email = formData.get('email')
  const password = formData.get('password')

  if (email === '') {
    return {
      status: "error",
      message: "ایمیل خود را وارد کنید"
    }
  }

  if (password === '') {
    return {
      status: "error",
      message: "رمز خود را وارد کنید"
    }
  }

  const data = await postFetch("http://127.0.0.1:8000/api/login", {
    email: email,
    password: password
  })

  if (data.status === 'success') {
    (await cookies()).set(
      {
        name: 'login_token',
        value: data.data.token,
        httpOnly: true,
        path: '/',
        maxAge: 60 * 60 * 24 // 5 minutes
      }
    )

    return {
      status: data.status,
      message: "وارد شدید ها ها ها"
    }
  } else {
    return {
      status: data.status,
      message: handleError(data.message)
    }
  }
}
