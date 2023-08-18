"use client";
import { useEffect } from "react";
import { getCookie } from "../service/cookie";

export default function Myqt() {
  useEffect(() => {
    if (!getCookie("access_token")) {
      window.location.href = "/landing";
    }
  }, []);
  
  return (
    <div>
      <h1>오큐완</h1>
    </div>
  );
}
