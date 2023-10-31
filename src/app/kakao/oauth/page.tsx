"use client";
import { GET_TOKEN_URL, REDIRECT_URL } from "@/app/service/constants";
import { setCookie } from "@/app/service/cookie";
import axios from "axios";
import { useEffect } from "react";

export default function Loading() {
  useEffect(() => {
    const code: string = window.location.search.split("=")[1];
    getToken(code);
  }, []);

  async function getToken(code: string) {
    try {
      await axios
        .post(GET_TOKEN_URL, null, {
          params: {
            grant_type: "authorization_code",
            client_id: `${process.env.NEXT_PUBLIC_KAKAO_KEY}`,
            redirect_uri: REDIRECT_URL,
            code,
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        })
        .then((res) => {
          setCookie("access_token", res.data.access_token, 1);
          if (typeof window !== "undefined") window.location.href = "/myqt";
        });
    } catch (e) {
      console.log(e);
    }
  }
  return <div>로그인 중...</div>;
}
