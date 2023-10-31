"use client";
import { useEffect } from "react";
import { getCookie } from "./service/cookie";

export default function Home() {
  useEffect(() => {
    getCookie("access_token")
      ? (window.location.href = "/myqt")
      : (window.location.href = "/landing");
  }, []);
  return (
    <main>
      <div></div>
    </main>
  );
}
