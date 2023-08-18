"use client";
import { useEffect, useState } from "react";
import { getCookie } from "../service/cookie";
import css from "styled-jsx/css";
import AddQtButton from "../components/addQtButton";
import { qtData } from "../service/data";
import PebbleImage from "../components/pebbleImage";
import { getTodayDate } from "../service/date";
import BottomNavigationBar from "../components/bottomNavigationBar";

const style = css`
  .layout {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
  }
  p {
    font-size: 0.8rem;
    margin: 0;
  }
  .title {
    position: fixed;
    top: 0.5rem;
    font-size: 1.5rem;
    margin: 0;
  }
  .top {
    display: flex;
    width: 100vw;
    justify-content: space-around;
    align-items: center;
    margin-top: 3rem;
  }
  .today {
    font-size: 1rem;
    font-weight: 600;
  }
  .wrap-scroll {
    width: 100vw;
    overflow-y: auto;
  }
  .qt-box {
    display: flex;
    flex-wrap: wrap;
    width: 95vw;
    margin: auto;
  }
  .container {
    width: 40vw;
    height: 40vw;
    padding: 0.5rem;
    margin: 1vw 1vw;
    border-radius: 0.625rem;
    border: 0.5px solid var(--808080, #808080);
    background: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    text-align: center;
  }
  .qt-text-div {
    height: 30%;
  }
  .qt-date {
    font-weight: 600;
  }
`;

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
      <style jsx>{style}</style>
    </div>
  );
}
