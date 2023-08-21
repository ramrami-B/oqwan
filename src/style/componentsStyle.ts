import css from "styled-jsx/css";

export const BottomNavigationBarStyle = css`
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
`;

export const PebbleImageStyle = css`
  div {
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
