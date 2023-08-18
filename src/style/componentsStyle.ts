import css from "styled-jsx/css";

export const AddQtButtonStyle = css`
label {
  display: flex;
  width: 7.5rem;
  height: 1.875rem;
  border-radius: 0.9375rem;
  background: var(--68-b-984, #68b984);
  justify-content: center;
  align-items: center;
}
input {
  display: none;
}
p {
  margin: 0;
  text-align: center;
  color: #fff;
  font-size: 0.9375rem;
  font-weight: 600;
}
`;

export const BottomNavigationBarStyle = css`
.bottom-navigation-bar {
  position: fixed;
  display: flex;
  bottom: 0;
  width: 100vw;
  height: 5rem;
  background-color: #fff;
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