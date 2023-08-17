"use client";
import css from "styled-jsx/css";
import Image from "next/image";
import KakaoLoginButton from "../components/kakaoLoginButton";

export default function Landing() {
  const style = css`
    .layout {
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1em;
    }
    p {
      font-size: 20px;
      margin: 0;
    }
    h1 {
      font-size: 24px;
    }
    .title {
      text-align: center;
    }
  `;

  function onClickKakaoLoginButton() {
    console.log("login!");
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
      <KakaoLoginButton onClick={onClickKakaoLoginButton}></KakaoLoginButton>

      <style jsx>{style}</style>
    </div>
  );
}
