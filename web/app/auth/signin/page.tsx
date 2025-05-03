import Auth from "@/components/auth/Auth";

export default async function Login() {
  console.log("Login page loaded");
  return (
    <div>
      <Auth type="LOGIN" />
    </div>
  );
}
