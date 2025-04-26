"use client"
import ContentWrapper from "@/components/layout/content-wrapper";
import RichTextEditor from "@/modules/posts/components/text-editor";
import TextEditor from "@/modules/posts/components/TextEditor";
import WYSIWYGScript from "@/providers/flowbite-wysiwyg";


export default function CreatePost() {


  return (
    <>

      <ContentWrapper>
        {/* <TextEditor /> */}
        {/* <div id="wysiwyg"></div> */}

        <form>
          <div className="grid gap-6 mb-6 md:grid-cols-3">
            <div>
              <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">عنوان مقاله:</label>
              <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:text-white required " />
            </div>
            <div>
              <label htmlFor="author" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">نام نویسنده:</label>
              <input type="text" id="author" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:text-white required " />
            </div>
            <div>
              <label htmlFor="input-group-1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ایمیل نویسنده:</label>
              <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>
                <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@gmail.com" dir="ltr"/>
              </div>
            </div>
            <div className="md:max-w-[50%]">
              <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">فهرست دسته بندی ها:</label>
              <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>پروازهای داخلی</option>
                <option defaultValue="US">United States</option>
                <option defaultValue="CA">Canada</option>
                <option defaultValue="FR">France</option>
                <option defaultValue="DE">Germany</option>
              </select>
            </div>
          </div>
        </form>




        <div className="container mx-auto py-8">
          <RichTextEditor />
        </div>
      </ContentWrapper>
      {/* <WYSIWYGScript /> */}
    </>
  )

}
