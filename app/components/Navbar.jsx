import Image from "next/image";
import Link from "next/link";
import logo from "./dojo-logo.png";
export default function Navbar() {
  return (
    <nav>
      <Image src={logo} width={70} placeholder="blur" alt="a company logo" />
      <h1>Maurice Helpdesk</h1>
      <Link href="/">Home</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
