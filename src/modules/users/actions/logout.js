"use server"
// import { postFetch } from "@/utils/fetch"
import { cookies } from "next/headers"
import { redirect } from "next/navigation";

export async function logout() {

  const userToken = (await cookies()).get('login_token');

  (await cookies()).delete('login_token');
  redirect('/login');

  // if (!userToken) {
  //   return {
  //     status: "error",
  //     message: "undefined user_token!"
  //   }
  // }

  // const data = await postFetch("/auth/logout", {}, {
  //   'Authorization': `Bearer ${userToken.value}`
  // })

  // if (data.status === 'success') {
  //   (await cookies()).delete('token');

  //   return {
  //     success: "شما از حساب خود خارج شدید"
  //   }
  // } else {
  //   return {
  //     error: "User Forbidden"
  //   }
  // }
}