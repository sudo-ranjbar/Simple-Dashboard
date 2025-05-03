
import ContentWrapper from "@/components/layout/content-wrapper";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import Link from "next/link";
import { Suspense } from "react";



export default function CommentPage() {
  return (
    <ContentWrapper>
      <Suspense fallback={`Loding...`}>


        <div className="overflow-x-auto">
          <Table hoverable style={{ textAlign: "right" }}>
            <TableHead >
              <TableHeadCell className="px-3">ردیف</TableHeadCell>
              <TableHeadCell>نویسنده</TableHeadCell>
              <TableHeadCell>دیدگاه</TableHeadCell>
              <TableHeadCell>مقاله</TableHeadCell>
              <TableHeadCell>تاریخ</TableHeadCell>
              <TableHeadCell>عملیات</TableHeadCell>
            </TableHead>
            <TableBody className="divide-y">
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800 text-xs">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-1 px-3">
                  1)
                </TableCell>
                <TableCell className="">امیرحسین رنجبر</TableCell>
                <TableCell className="max-w-3xs">
                  <p className="truncate">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده
                  </p>
                </TableCell>
                <TableCell>$2999</TableCell>
                <TableCell>$2999</TableCell>
                <TableCell>
                  <Link href="#" className="bg-blue-500 rounded-md p-1 text-white ml-1">ویرایش </Link>
                  <Link href="#" className="bg-red-500 rounded-md p-1 text-white">حذف </Link>
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800 text-xs">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-1 px-3">
                  1)
                </TableCell>
                <TableCell className="">علی عباسی</TableCell>
                <TableCell className="max-w-3xs">
                  <p className="truncate">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده
                  </p>
                </TableCell>
                <TableCell>$2999</TableCell>
                <TableCell>$2999</TableCell>
                <TableCell>
                  <Link href="#" className="bg-blue-500 rounded-md p-1 text-white ml-1">ویرایش </Link>
                  <Link href="#" className="bg-red-500 rounded-md p-1 text-white">حذف </Link>
                </TableCell>
              </TableRow>

            </TableBody>
          </Table>
        </div>
      </Suspense>
    </ContentWrapper>
  );
}
