import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import TableDemo from "@/components/table-sample";


export default function Home() {

  return (
    <div className="flex h-screen p-2 gap-x-5">

      <Sidebar />

      <div className="p-4 bg-background rounded-md w-full h-full overflow-y-auto border shadow">
        <Header />

        <div className="w-full p-2 px-3 border my-2 shadow">
          <h2 className="text-2xl font-bold">داشبورد</h2>

          <div className="my-2 shadow">
            <table className="w-full table-auto border-collapse border border-gray-400 ...">
              <thead>
                <tr>
                  <th className="border text-right border-gray-300 p-1">نام</th>
                  <th className="border text-right border-gray-300 p-1">ایمیل</th>
                  <th className="border text-right border-gray-300 p-1">شماره تماس</th>
                  <th className="border text-right border-gray-300 p-1">استان</th>
                  <th className="border text-right border-gray-300 p-1">شهر</th>
                  <th className="border text-right border-gray-300 p-1">منطقه</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-foreground/10">
                  <td className="border-b border-gray-300 p-1">Indiana</td>
                  <td className="border-b border-gray-300 p-1">Indiana</td>
                  <td className="border-b border-gray-300 p-1">Indiana</td>
                  <td className="border-b border-gray-300 p-1">Indianapolis</td>
                  <td className="border-b border-gray-300 p-1">Indianapolis</td>
                  <td className="border-b border-gray-300 p-1">Indianapolis</td>
                </tr>
                <tr className="hover:bg-foreground/10">
                  <td className="border-b border-gray-300 p-1">Ohio</td>
                  <td className="border-b border-gray-300 p-1">Ohio</td>
                  <td className="border-b border-gray-300 p-1">Ohio</td>
                  <td className="border-b border-gray-300 p-1">Columbus</td>
                  <td className="border-b border-gray-300 p-1">Columbus</td>
                  <td className="border-b border-gray-300 p-1">Columbus</td>
                </tr>
                <tr className="hover:bg-foreground/10">
                  <td className="border-b border-gray-300 p-1">Michigan</td>
                  <td className="border-b border-gray-300 p-1">Michigan</td>
                  <td className="border-b border-gray-300 p-1">Michigan</td>
                  <td className="border-b border-gray-300 p-1">Detroit</td>
                  <td className="border-b border-gray-300 p-1">Detroit</td>
                  <td className="border-b border-gray-300 p-1">Detroit</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

      </div>

    </div>
  );
}
