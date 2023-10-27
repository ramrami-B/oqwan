import { getTodayDate, getYesterdayDate } from "@/app/service/date";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

interface ModalDateProps {
  isToday: boolean;
  setIsToday: any;
}
export default function ModalDate({ isToday, setIsToday }: ModalDateProps) {
  function changeDate(isBackToYesterDay: boolean) {
    setIsToday(isBackToYesterDay ? false : true);
  }

  return (
    <div className="date">
      <div onClick={() => changeDate(true)}>
        <AiFillCaretLeft color={isToday ? "#000" : "#808080"} />
      </div>
      <p>{isToday ? "오늘 " + getTodayDate() : "어제 " + getYesterdayDate()}</p>
      <div onClick={() => changeDate(false)}>
        <AiFillCaretRight color={isToday ? "#808080" : "#000"} />
      </div>
      <style jsx>{`
        .date {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .date div {
          display: flex;
          align-items: center;
        }
        .date p {
          font-size: 1.2rem;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
