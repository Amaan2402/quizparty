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
      <div className="lg:mx-40 xl:mx-60 2xl:mx-96 mx-10 mt-12 md:mt-0 flex justify-center lg:justify-between items-center">
        <div>{children}</div>
        <div className="hidden lg:block">
          <PersonImage src="https://nyc.cloud.appwrite.io/v1/storage/buckets/681203a2000746e35401/files/681205a20008a3daa3d3/view?project=6809910a000e66c57d35&mode=admin" />
        </div>
      </div>
      <AuthFooter />
    </div>
  );
}
