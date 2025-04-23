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
        <div className="max-w-3xl mx-auto py-8">

          <RichTextEditor />
        </div>
      </ContentWrapper>
      {/* <WYSIWYGScript /> */}
    </>
  )

}
