import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import PebbleImage from "../PebbleImage";
import GreenButton from "../GreenButton";
import ModalDate from "./ModalDate";
import ModalContentContainer from "./ModalContentContainer";
import { PEBBLE_STATUS } from "@/app/constants/ui";
import { modalStyle } from "@/style/modalStyle";

interface ModalProps {
  onClickShowModal: any;
  showModal: boolean;
  modalInfo: { status: string; data: object };
}

export default function Modal({
  onClickShowModal,
  showModal,
  modalInfo,
}: ModalProps) {
  const [isToday, setIsToday] = useState(true);
  const [pebbleStatusIdx, setPebbleStatusIdx] = useState(0);

  function closeModal() {
    onClickShowModal(!showModal);
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

        {modalInfo.status === "add" ? (
          <>
            <ModalDate isToday={isToday} setIsToday={setIsToday} />
            <div onClick={changePebbleStatus}>
              <PebbleImage pebbleStatus={PEBBLE_STATUS[pebbleStatusIdx]} />
            </div>
            <ModalContentContainer />
            <div className="save-button">
              <GreenButton
                onClickButton={onClickSaveButton}
                text="저장하기"
                buttonId="saveNewQT"
                size="large"
              />
            </div>
          </>
        ) : modalInfo.status === "view" ? (
          <>
            <ModalDate isToday={isToday} setIsToday={setIsToday} />
            <div onClick={changePebbleStatus}>
              <PebbleImage pebbleStatus={PEBBLE_STATUS[pebbleStatusIdx]} />
            </div>
            <ModalContentContainer />
            <div className="save-button">
              <GreenButton
                onClickButton={onClickSaveButton}
                text="저장하기"
                buttonId="saveNewQT"
                size="large"
              />
            </div>
          </>
        ) : (
          <>
            <ModalDate isToday={isToday} setIsToday={setIsToday} />
            <div onClick={changePebbleStatus}>
              <PebbleImage pebbleStatus={PEBBLE_STATUS[pebbleStatusIdx]} />
            </div>
            <ModalContentContainer />
            <div className="save-button">
              <GreenButton
                onClickButton={onClickSaveButton}
                text="저장하기"
                buttonId="saveNewQT"
                size="large"
              />
            </div>
          </>
        )}
      </div>
      <style jsx>{modalStyle}</style>
    </div>
  );
}
