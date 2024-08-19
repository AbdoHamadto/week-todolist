import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex sticky top-0 z-10 bg-bgTaskes p-2 justify-around text-white font-bold text-xl">
      <Link href="/allWeeks" className="click hover:text-bgText">
        الأسبوع السابق
      </Link>
      <div className="w-1 h-8 bg-bgTaske" />
      <Link href="/" className="click hover:text-bgText">
        الأسبوع الحالي
      </Link>
      <div className="w-1 h-8 bg-bgTaske" />
      <Link href="/addTodo" className="click hover:text-bgText">
        الأسبوع التالي
      </Link>
    </div>
  );
};

export default NavBar;
