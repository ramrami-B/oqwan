import css from "styled-jsx/css";

const style = css`
  label {
    display: flex;
    width: 7.5rem;
    height: 1.875rem;
    border-radius: 0.9375rem;
    background: var(--68-b-984, #68b984);
    justify-content: center;
    align-items: center;
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
`;

interface AddQtButtonProps {
  onClickAddQtButton: any;
}

export default function AddQtButton({ onClickAddQtButton }: AddQtButtonProps) {
  return (
    <label htmlFor="addNewQt">
      <input type="button" id="addNewQt" onClick={onClickAddQtButton}></input>
      <p>큐티 기록 하기</p>
      <style jsx>{style}</style>
    </label>
  );
}
