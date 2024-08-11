import Link from "next/link";

const NavBar = () => {
  return(
    <div className="flex bg-orange-500 p-2 justify-around text-white font-bold text-xl">
      <Link href='/' className="hover:text-green-500">الأسبوع السابق</Link>
      <div className="w-1 h-8 bg-rose-500"/>
      <Link href='/' className="hover:text-green-500">الأسبوع الحالي</Link>
      <div className="w-1 h-8 bg-rose-500"/>
      <Link href='/' className="hover:text-green-500">الأسبوع التالي</Link>
    </div>
  )
}

export default NavBar;