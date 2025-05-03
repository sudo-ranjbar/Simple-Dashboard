"use client"

import SubmitButton from "@/components/ui/SubmitButton"
import login from "@/modules/users/actions/login"
import { useRouter } from "next/navigation"
import { useActionState, useEffect } from "react"
import { toast } from "react-toastify"

export default function LoginPage() {
    const [state, formAction, isPending] = useActionState(login, {})

    const router = useRouter()

    useEffect(() => {

        toast(state?.message, { type: `${state?.status}` })

        if (state?.status === 'success') {
            router.push('/')
        }

    }, [state])

    return (
        <>

            <h2 className="text-3xl text-center my-20 font-bold">فرم ورود</h2>
            <form className="max-w-sm mx-auto flex flex-col" action={formAction}>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ایمیل</label>
                    <input name="email" style={{ direction: "ltr" }} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@gmail.com" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">پسوورد</label>
                    <input name="password" type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                        <input name="remember" id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                    </div>
                    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">مرا به‌خاطر بسپار</label>
                </div>
                <SubmitButton title={`وارد شوید`} isPending={isPending} style={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`} />
            </form>
        </>
    )
}