import "../App.css";

export const Modal = (props) => {
  const { location, close } = props || {};
  const { name, items } = location || {};
  return (
    <>
      <div className="modal-layout"></div>
      <div className="modal">
        <div className="modal-container">
          <button className="close-button" onClick={close}>
            X
          </button>
          <h1>Location {name} lockers</h1>
          {items && items.length > 0
            ? items.map((item, index) => (
                <div key={index} className="item">
                  <div className="status">
                    <div
                      className={` ${
                        item?.status === "update"
                          ? "green-ball"
                          : item?.status === "driver-only"
                          ? "red-ball"
                          : item?.status === "user-only"
                          ? "yellow-ball"
                          : "transparent-bar"
                      } `}
                    />
                    {`${index + 1} ${item?.value}`}
                  </div>
                  <div className="opcode">
                    {`opcode: ${item?.opcode}`}
                    {item?.status === "driver-only" ? (
                      <button>Update status</button>
                    ) : null}
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
};
