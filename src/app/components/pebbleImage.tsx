import Image from "next/image";

export default function PebbleImage({ pebbleStatus }: any) {
  return (
    <div className="qt-image-div">
      {pebbleStatus === "good" ? (
        <Image
          src="/good_pebble.svg"
          alt="good-pebble"
          width="65"
          height="65"
          priority
        />
      ) : pebbleStatus === "upset" ? (
        <Image
          src="/upset_pebble.svg"
          alt="upset-pebble"
          width="65"
          height="65"
          priority
        />
      ) : pebbleStatus === "excited" ? (
        <Image
          src="/excited_pebble.svg"
          alt="excited-pebble"
          width="65"
          height="65"
          priority
        />
      ) : pebbleStatus === "sad" ? (
        <Image
          src="/sad_pebble.svg"
          alt="sad-pebble"
          width="65"
          height="65"
          priority
        />
      ) : null}
      <style jsx>{`
        div {
          height: 70%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}
