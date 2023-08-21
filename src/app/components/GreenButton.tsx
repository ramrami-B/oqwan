interface GreenButtonProps {
  onClickButton: any;
  text: string;
  buttonId: string;
  size: string;
}

export default function GreenButton({
  onClickButton,
  text,
  buttonId,
  size,
}: GreenButtonProps) {
  return (
    <label
      htmlFor={buttonId}
      className={size === "small" ? "small-button" : "large-button"}
    >
      <input type="button" id={buttonId} onClick={onClickButton}></input>
      <p>{text}</p>
      <style jsx>{`
        label {
          display: flex;
          border-radius: 1rem;
          background: var(--68-b-984, #68b984);
          justify-content: center;
          align-items: center;
        }
        .small-button {
          width: 6.5rem;
          height: 1.6rem;
        }
        .large-button {
          width: 7rem;
          height: 2.5rem;
        }
        input {
          display: none;
        }
        p {
          margin: 0;
          text-align: center;
          color: #fff;
          font-size: 0.9375rem;
          font-weight: 600;
        }
      `}</style>
    </label>
  );
}
