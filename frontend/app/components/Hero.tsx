"use client";
import { signIn, useSession } from "next-auth/react";
import { SecondaryButton } from "./Button";
import { useRouter } from "next/navigation";

export const Hero = () => {
  const session = useSession();
  const router = useRouter();
  return (
    <div>
      <div className="text-6xl font-medium">
        <span>The Indian Crypto Currency </span>
        <span className="text-blue-500">Revolution</span>
      </div>
      <div className="flex justify-center pt-4 text-2xl text-gray-500">
        Create a frictionless wallet from India with just a Google Account
      </div>
      <div className="flex justify-center pt-4 text-2xl text-gray-500">
        Convert you INR into Crypto Currency
      </div>
      <div className="pt-4 flex justify-center">
        {session.data?.user ? (
          <SecondaryButton
            onClick={() => {
              router.push("/dashboard");
            }}
          >
            Go to the Dashboard
          </SecondaryButton>
        ) : (
          <SecondaryButton onClick={() => signIn("google")}>
            Login with Google
          </SecondaryButton>
        )}
      </div>
    </div>
  );
};
