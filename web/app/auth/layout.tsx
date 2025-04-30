import AuthFooter from "@/components/auth/AuthFooter";
import AuthHeader from "@/components/auth/AuthHeader";
import PersonImage from "@/components/common/PersonImage";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#3d3da8] min-h-screen">
      <AuthHeader />
      <div className="lg:mx-72 mt-12 flex justify-between items-center">
        <div>{children}</div>
        <PersonImage />
      </div>
      <AuthFooter />
    </div>
  );
}
