import Link from "next/link";

const NavBar = () => {
  return(
    <div className="flex bg-bgNav p-2 justify-around text-white font-bold text-xl">
      <Link href='/' className="hover:text-bgText text-white">الأسبوع السابق</Link>
      <div className="w-1 h-8 bg-bgSpace"/>
      <Link href='/' className="hover:text-bgText text-white">الأسبوع الحالي</Link>
      <div className="w-1 h-8 bg-bgSpace"/>
      <Link href='/' className="hover:text-bgText text-white">الأسبوع التالي</Link>
    </div>
  )
}

export default NavBar;