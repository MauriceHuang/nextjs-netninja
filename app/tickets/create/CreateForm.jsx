"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function CreateForm() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [priority, setPriority] = useState("low");
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  return <form className="w-1/2">Create Form</form>;
}