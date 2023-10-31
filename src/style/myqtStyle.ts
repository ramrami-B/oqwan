import css from "styled-jsx/css";

export const myqtStyle = css`
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
    margin: 3rem 0 0.5rem 0;
  }
  .today {
    font-size: 1rem;
    font-weight: 600;
  }
  .top label {
    background-color: red;
    width: 10rem;
    height: 3rem;
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
