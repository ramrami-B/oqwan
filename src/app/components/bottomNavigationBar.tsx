import { BOTTOM_TAPS } from "../service/constants";

interface BottomNavigationBarProps {
  tabIndex: number;
  onClickBottomTab: any;
}

export default function BottomNavigationBar({
  tabIndex,
  onClickBottomTab,
}: BottomNavigationBarProps) {
  return (
    <div className="bottom-navigation-bar">
      {BOTTOM_TAPS.map((tap, idx) => {
        let className = idx === tabIndex ? "current-tab" : "";
        return (
          <div
            key={idx}
            className="bottom-tab"
            onClick={(e) => onClickBottomTab(idx)}
          >
            <p className={className}>{tap}</p>
          </div>
        );
      })}
      <style jsx>{`
        .bottom-navigation-bar {
          position: fixed;
          display: flex;
          bottom: 0;
          width: 100vw;
          height: 4rem;
          background-color: #fff;
          z-index: 9;
        }
        .bottom-tab {
          display: flex;
          width: calc(100vw / 3);
          height: 100%;
          border-top: 0.5px solid #aaa;
          border-right: 0.25px solid #aaa;
          align-items: center;
          justify-content: center;
        }
        .current-tab {
          color: #68b984;
          font-size: 1.125rem;
          font-weight: 700;
        }
        .bottom-tap p {
          font-size: 1rem;
        }
      `}</style>
    </div>
  );
}
