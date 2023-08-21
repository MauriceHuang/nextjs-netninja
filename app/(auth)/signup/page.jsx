"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import AuthForm from "../AuthForm";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const [error, setError] = useState("");
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    setError("");
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`,
      },
    });
    if (error) {
      setError(error.message);
      return;
    }
    if (!error) {
      router.push("/verify");
    }

    console.log("signup/page/handleSubmit", { email, password });
  };
  return (
    <main>
      <h2 className="text-center">Signup</h2>

      <AuthForm handleSubmit={handleSubmit} />
      {error && <div className="error">{error}</div>}
    </main>
  );
}
