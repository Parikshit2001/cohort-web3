"use client"
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    redirect("week1");
  }, []);
  return (
    <div className="w-full h-full flex flex-col items-center justify-center"></div>
  );
}
