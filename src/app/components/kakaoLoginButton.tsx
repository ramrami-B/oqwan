import Image from "next/image";
import css from "styled-jsx/css";

interface KakaoLoginButtonProps {
  onClick: any;
}
export default function KakaoLoginButton({ onClick }: KakaoLoginButtonProps) {
  return (
    <div onClick={onClick}>
      <Image
        src="/kakao_login_large_narrow.png"
        alt="kakao"
        width="180"
        height="40"
      ></Image>
    </div>
  );
}
