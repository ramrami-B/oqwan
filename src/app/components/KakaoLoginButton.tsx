import Image from "next/image";

interface KakaoLoginButtonProps {
  onClick: any;
}

export default function KakaoLoginButton({ onClick }: KakaoLoginButtonProps) {
  return (
    <div onClick={onClick}>
      <Image
        src="/kakao_login_large_narrow.png"
        alt="kakao"
        width="200"
        height="50"
      ></Image>
    </div>
  );
}
