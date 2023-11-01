import { QT_CONTENT } from "@/app/constants/ui";

export default function ModalContentContainer() {
  return (
    <div className="modal-content">
      {QT_CONTENT.map((content, idx) => {
        return (
          <div key={idx} className="content-container">
            <div>
              <p>{content}</p>
            </div>
            {idx === 0 ? <input type="text"></input> : <textarea></textarea>}
          </div>
        );
      })}
      <style jsx>{`
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
          padding-left: 0.5rem;
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
          width: 35%;
          height: 100%;
          border-radius: 0.3125rem 0rem 0rem 0.3125rem;
          border-top: 0.5px solid #808080;
          border-bottom: 0.5px solid #808080;
          border-left: 0.5px solid #808080;
          background: var(--afd-6-c-7, #afd6c7);
        }
        .modal-content div:first-child input {
          width: 65%;
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
      `}</style>
    </div>
  );
}