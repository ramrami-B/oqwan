import Image from "next/image";
import css from "styled-jsx/css";

const style = css`
  div {
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default function PebbleImage({ pebbleStatus }: any) {
  return (
    <div className="qt-image-div">
      {pebbleStatus === "good" ? (
        <Image
          src="/good_pebble.svg"
          alt="good-pebble"
          width="65"
          height="65"
        />
      ) : pebbleStatus === "upset" ? (
        <Image
          src="/upset_pebble.svg"
          alt="upset-pebble"
          width="65"
          height="65"
        />
      ) : pebbleStatus === "excited" ? (
        <Image
          src="/excited_pebble.svg"
          alt="excited-pebble"
          width="65"
          height="65"
        />
      ) : pebbleStatus === "sad" ? (
        <Image src="/sad_pebble.svg" alt="sad-pebble" width="65" height="65" />
      ) : null}
      <style jsx>{style}</style>
    </div>
  );
}
