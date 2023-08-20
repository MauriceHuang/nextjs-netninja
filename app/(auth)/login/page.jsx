"use client";
import AuthForm from "../AuthForm";

export default function Login() {
  const handleSubmit = async (e, password, email) => {
    e.preventDefault();
    console.log("login/page/handleSubmit", { email, password });
  };
  return (
    <main>
      <h2 className="text-center">Login</h2>
      <AuthForm handleSubmit={handleSubmit} />
    </main>
  );
}
