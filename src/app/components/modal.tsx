import { getTodayDate, getYesterdayDate } from "../service/date";
import {
  AiFillCaretLeft,
  AiFillCaretRight,
  AiOutlineClose,
} from "react-icons/ai";
import { useState } from "react";
import PebbleImage from "./pebbleImage";
import { PEBBLE_STATUS, QT_CONTENT } from "../service/constants";
import Button from "./greenButton";
import { modalStyle } from "@/style/modalStyle";

interface ModalProps {
  modalStatus: string;
  onClickShowModal: any;
  showModal: boolean;
}

export default function Modal({
  modalStatus,
  onClickShowModal,
  showModal,
}: ModalProps) {
  const [isToday, setIsToday] = useState(true);
  const [pebbleStatusIdx, setPebbleStatusIdx] = useState(0);

  function closeModal() {
    onClickShowModal(!showModal);
  }

  function changeDate(isBackToYesterDay: boolean) {
    setIsToday(isBackToYesterDay ? false : true);
  }

  function changePebbleStatus() {
    if (pebbleStatusIdx === PEBBLE_STATUS.length - 1) {
      setPebbleStatusIdx(0);
    } else {
      setPebbleStatusIdx(pebbleStatusIdx + 1);
    }
  }

  function onClickSaveButton() {
    console.log("큐티 저장!");
  }

  return (
    <div className="background">
      <div className="modal">
        <div onClick={closeModal} className="close-modal">
          <AiOutlineClose size="20" />
        </div>
        <div className="date">
          <div onClick={() => changeDate(true)}>
            <AiFillCaretLeft color={isToday ? "#000" : "#808080"} />
          </div>
          <p>
            {isToday ? "오늘 " + getTodayDate() : "어제 " + getYesterdayDate()}
          </p>
          <div onClick={() => changeDate(false)}>
            <AiFillCaretRight color={isToday ? "#808080" : "#000"} />
          </div>
        </div>
        <div onClick={changePebbleStatus}>
          <PebbleImage pebbleStatus={PEBBLE_STATUS[pebbleStatusIdx]} />
        </div>
        <div className="modal-content">
          {QT_CONTENT.map((content, idx) => {
            return (
              <div key={idx} className="content-container">
                <div>
                  <p>{content}</p>
                </div>
                {idx === 0 ? (
                  <input type="text"></input>
                ) : (
                  <textarea></textarea>
                )}
              </div>
            );
          })}
        </div>
        <div className="save-button">
          <Button
            onClickButton={onClickSaveButton}
            text="저장하기"
            buttonId="saveNewQT"
            size="large"
          />
        </div>
      </div>
      <style jsx>{modalStyle}</style>
    </div>
  );
}
