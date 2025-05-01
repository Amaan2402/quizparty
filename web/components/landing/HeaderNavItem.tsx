import Link from "next/link";

function HeaderNavItem({
  title,
  redirectTo,
  showBg = false,
}: {
  title: string;
  showBg?: boolean;
  redirectTo: string;
}) {
  return (
    <Link href={redirectTo}>
      <button
        className={`${
          showBg
            ? "bg-[#232270] hover:bg-[#1e1d6b] px-6 rounded-md py-1"
            : "hover:font-medium w-[100px] "
        } cursor-pointer text-base text-white outline-none`}
      >
        {title}
      </button>
    </Link>
  );
}

export default HeaderNavItem;
