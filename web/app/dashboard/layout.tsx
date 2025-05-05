import Header from "@/components/dashboard/Header";
import SideBar from "@/components/dashboard/SideBar";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#3d3da8] flex min-h-screen w-full overflow-hidden">
      <SideBar />
      <div className="p-6 w-full min-h-full bg-[#2e2c8d] overflow-y-hidden">
        <Header />
        {children}
      </div>
    </div>
  );
}
