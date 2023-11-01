import css from "styled-jsx/css";

export const modalStyle = css`
  p {
    text-align: center;
    font-size: 1rem;
    font-weight: 500;
  }
  .background {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 10;
  }
  .modal {
    width: 80%;
    height: 37.5rem;
    border-radius: 0.625rem;
    border: 0.5px solid var(--808080, #808080);
    background: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    overflow-y: auto;
  }
  .close-modal {
    text-align: right;
    padding: 0.8rem 1rem 0 0;
  }
  .save-button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem;
  }
`;