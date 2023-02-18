import React from "react";
import "./index.scss";

function App() {
  const [open, setOpen] = React.useState(false);

  const ShowModal = () => setOpen((state) => !state);

  let classList;
  if (open) {
    classList = "overlay animated show";
  } else {
    classList = "overlay animated";
  }

  return (
    <div className="App">
      <button className="open-modal-btn" onClick={ShowModal}>
        ✨ Открыть окно
      </button>
      <div className={classList}>
        <div className="modal show">
          <svg
            onClick={ShowModal}
            height="200"
            viewBox="0 0 200 200"
            width="200"
          >
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" />
        </div>
      </div>
    </div>
  );
}

export default App;
