import { AddQtButtonStyle } from "@/style/componentsStyle";

interface AddQtButtonProps {
  onClickAddQtButton: any;
}

export default function AddQtButton({ onClickAddQtButton }: AddQtButtonProps) {
  return (
    <label htmlFor="addNewQt">
      <input type="button" id="addNewQt" onClick={onClickAddQtButton}></input>
      <p>큐티 기록 하기</p>
      <style jsx>{AddQtButtonStyle}</style>
    </label>
  );
}
