function HeaderNavItem({
  title,
  showBg = false,
}: {
  title: string;
  showBg?: boolean;
}) {
  return (
    <button
      className={`${
        showBg
          ? "bg-[#232270] hover:bg-[#1e1d6b] px-6 rounded-md py-1"
          : "hover:font-medium w-[100px] "
      } cursor-pointer text-base text-white outline-none`}
    >
      {title}
    </button>
  );
}

export default HeaderNavItem;
