import Header from "@/components/dashboard/Header";
import SideBar from "@/components/dashboard/SideBar";
import SideBarOverLay from "@/components/dashboard/SideBarOverLay";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#3d3da8] flex min-h-screen w-full">
      <div className="hidden sm:block">
        <SideBar onlyIcon />
      </div>
      <SideBarOverLay onlyIcon={false} />
      <div className="w-full h-screen bg-[#2e2c8d] overflow-auto hide-scrollbar">
        <Header />
        {children}
      </div>
    </div>
  );
}
