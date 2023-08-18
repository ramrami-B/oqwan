"use client";
import { useEffect, useState } from "react";
import { getCookie } from "./service/cookie";

export default function Home() {
  const [isLanding, setIsLanding] = useState(true);
  
  useEffect(() => {
    if (getCookie("access_token")) {
      setIsLanding(false);
    } else {
      setIsLanding(true);
    }
  }, []);

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
