"use client";
import KakaoLoginButton from "../components/KakaoLoginButton";
import Script from "next/script";
import { useEffect } from "react";
import { getCookie } from "../service/cookie";
import { landingStyle } from "@/style/landingStyle";
import { REDIRECT_URL } from "../constants/kakao";

export default function Landing() {
  useEffect(() => {
    if (getCookie("access_token")) {
      window.location.href = "/myqt";
    }
  }, []);

  async function kakaoInit() {
    await window.Kakao;
    try {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(`${process.env.NEXT_PUBLIC_KAKAO_KEY}`);
      }
    } catch (e) {
      console.log(e);
    }
  }

  function kakaoLogin() {
    window.Kakao.Auth.authorize({
      redirectUri: REDIRECT_URL,
    });
  }

  return (
    <div className="layout">
      <div className="title">
        <p>오늘의 큐티를 기록하세요.</p>
        <h1>
          오늘 큐티 완료!
          <br />
          오큐완 ✍🏻
        </h1>
      </div>
      <KakaoLoginButton onClick={kakaoLogin}></KakaoLoginButton>

      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.3.0/kakao.min.js"
        integrity="sha384-70k0rrouSYPWJt7q9rSTKpiTfX6USlMYjZUtr1Du+9o4cGvhPAWxngdtVZDdErlh"
        crossOrigin="anonymous"
        onLoad={kakaoInit}
      ></Script>

      <style jsx>{landingStyle}</style>
    </div>
  );
}
