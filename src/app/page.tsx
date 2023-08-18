"use client";
import { getCookie } from "./service/cookie";

export default function Home() {
  return (
    <main>
      <div>
        {getCookie("access_token")
          ? (window.location.href = "/myqt")
          : (window.location.href = "/landing")}
      </div>
    </main>
  );
}
