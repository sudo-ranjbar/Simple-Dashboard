import { ModeToggle } from "../ui/mode-toggle";


export default function Header() {

  return (
    <div className="w-full bg-white dark:bg-dark-card gap-x-3 p-2 px-3 flex items-center border my-2 shadow rounded-md">
      <ModeToggle />
      <p>سلام</p>
      <p>سلام</p>
      <p>سلام</p>
      <p>سلام</p>
    </div>
  )
}