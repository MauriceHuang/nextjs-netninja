import Link from "next/link";
import { children } from "react";

export default function AuthLayout({ children }) {
  return (
    <>
      <nav>
        <h1>Maurice HelpDesk</h1>
        <Link href="/signup">Sign Up</Link>
        <Link href="/login">Login</Link>
      </nav>
      {children}
    </>
  );
}
