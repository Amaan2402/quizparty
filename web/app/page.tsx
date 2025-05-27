import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import InfoCardSection from "@/components/landing/InfoCardSection";
import { getUser } from "@/utils/auth";
import { cookies } from "next/headers";

export default async function Home() {
  const token = (await cookies()).get("token")?.value;
  let user;
  if (token) {
    const response = await getUser(token);
    user = response.data;
  } else {
    user = null;
  }
  return (
    <div className="text-white overflow-auto hide-scrollbar h-full">
      <Header user={user} />
      <Hero />
      <InfoCardSection />
      <HowItWorks />
      <Footer />
    </div>
  );
}
