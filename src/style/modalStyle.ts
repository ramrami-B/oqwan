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
  .modal-content {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 85%;
    height: 80%;
    margin: auto;
    margin-top: 1rem;
  }
  .modal-content p {
    display: flex;
    padding-left: 0.8rem;
    margin: 0;
    align-items: center;
  }
  .modal-content .content-container {
    margin: 0.2rem 0 0.2rem 0;
  }
  .modal-content div:first-child {
    height: 40%;
    display: flex;
    flex-direction: row;
  }
  .modal-content div:first-child div {
    width: 30%;
    height: 100%;
    border-radius: 0.3125rem 0rem 0rem 0.3125rem;
    border-top: 0.5px solid #808080;
    border-bottom: 0.5px solid #808080;
    border-left: 0.5px solid #808080;
    background: var(--afd-6-c-7, #afd6c7);
  }
  .modal-content div:first-child input {
    width: 70%;
    height: 100%;
    border-radius: 0rem 0.3125rem 0.3125rem 0rem;
    border: 0.5px solid var(--808080, #808080);
    background: #fff;
    padding: 0 0 0 0.3rem;
    outline: none;
  }
  .modal-content div {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .modal-content div div {
    width: 100%;
    height: 70%;
    border-radius: 0.3125rem 0.3125rem 0rem 0rem;
    border-top: 0.5px solid #808080;
    border-right: 0.5px solid #808080;
    border-left: 0.5px solid #808080;
    background: var(--afd-6-c-7, #afd6c7);
  }
  .modal-content textarea {
    width: 96%;
    height: 100%;
    border-radius: 0rem 0rem 0.3125rem 0.3125rem;
    border: 0.5px solid var(--808080, #808080);
    background: #fff;
    padding: 2%;
    resize: none;
    outline: none;
  }
  .save-button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem;
  }
`;
