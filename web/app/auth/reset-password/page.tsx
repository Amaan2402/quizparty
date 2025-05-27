import ResetPasswordForm from "@/components/auth/ResetPasswordForm";
import { Suspense } from "react";

function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordForm />
    </Suspense>
  );
}

export default Page;
