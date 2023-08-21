"use client";
import { useEffect, useState } from "react";
import { qtData } from "../service/data";
import PebbleImage from "../components/pebbleImage";
import { getTodayDate } from "../service/date";
import Modal from "../components/Modal";
import { myqtStyle } from "@/style/myqtStyle";
import GreenButton from "../components/greenButton";
import { getCookie } from "../service/cookie";
import BottomNavigationBar from "../components/bottomNavigationBar";

export default function Myqt() {
  const [tabIndex, setTabIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalStatus, setModalStatus] = useState("add");

  useEffect(() => {
    if (!getCookie("access_token")) {
      window.location.href = "/landing";
    }
  }, []);

  useEffect(() => {
    if (tabIndex === 1) {
      window.location.href = "/community";
    } else if (tabIndex === 2) {
      window.location.href = "/todayverse";
    }
  }, [tabIndex]);

  function onClickBottomTab(idx: number) {
    setTabIndex(idx);
  }

  function onClickShowModal() {
    setShowModal(!showModal);
  }

  return (
    <div className="layout">
      {showModal && (
        <Modal
          modalStatus={modalStatus}
          onClickShowModal={onClickShowModal}
          showModal={showModal}
        ></Modal>
      )}
      <h1 className="title">오큐완</h1>
      <div className="top">
        <p className="today">Today: {getTodayDate()}</p>
        <GreenButton
          onClickButton={onClickShowModal}
          text="큐티 기록 하기"
          buttonId="openModalButton"
          size="small"
        />
      </div>
      <div className="wrap-scroll">
        <div className="qt-box">
          {qtData.map((qt, idx) => {
            return (
              <div key={idx} className="container">
                <div className="qt-text-div">
                  <p className="qt-date">{qt.date}</p>
                  <p className="qt-bible-verse">{qt.bibleVerse}</p>
                </div>
                <PebbleImage pebbleStatus={qt.pebbleStatus} />
              </div>
            );
          })}
        </div>
      </div>
      <BottomNavigationBar
        tabIndex={tabIndex}
        onClickBottomTab={onClickBottomTab}
      />
      <style jsx>{myqtStyle}</style>
    </div>
  );
}
