"use client";
import { useState } from "react";

export default function Home() {
  const [isLanding, setIsLanding] = useState(true);
  return (
    <main>
      <div>
        {isLanding
          ? (window.location.href = "/landing")
          : (window.location.href = "/myqt")}
      </div>
    </main>
  );
}
