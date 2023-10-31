"use client";
import { useEffect, useState } from "react";
import { getCookie } from "../service/cookie";
import AddQtButton from "../components/AddQtButton";
import { qtData } from "../service/data";
import PebbleImage from "../components/PebbleImage";
import { getTodayDate } from "../service/date";
import BottomNavigationBar from "../components/BottomNavigationBar";
import { myqtStyle } from "@/style/myqtStyle";

export default function Myqt() {
  const [tabIndex, setTabIndex] = useState(0);

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

  function onClickAddQtButton() {
    console.log("add qt!");
  }

  return (
    <div className="layout">
      <h1 className="title">오큐완</h1>
      <div className="top">
        <p className="today">Today: {getTodayDate()}</p>
        <AddQtButton onClickAddQtButton={onClickAddQtButton} />
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
