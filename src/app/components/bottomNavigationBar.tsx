import { BOTTOM_TAPS } from "../service/constants";
import { BottomNavigationBarStyle } from "@/style/componentsStyle";

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
      <style jsx>{BottomNavigationBarStyle}</style>
    </div>
  );
}
