import { useState } from "react";
import "./OrderServiceForm.css";
import { FaPlus, FaAngleDown, FaAngleUp  } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import Modal from "react-modal";

Modal.setAppElement("#root")
const OrderServiceForm = () => {
  const [modalIsopen, setModalIsOpen] = useState(false);
  const [showModalAdvOptions, setShowModalAdvOptions] = useState(false)

  const clickCrossHandler = () =>{
    setModalIsOpen(false)
    setShowModalAdvOptions(false)
  }

  const onClickSubmit = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    console.log(data)
    setModalIsOpen(false)
    setShowModalAdvOptions(false)
  }

  return (
    <div className="main-container">
      <h1 className="main-heading">No ordering services</h1>
      <h1 className="main-heading">Hi</h1>
      <p className="main-sub-heading">Services list will be listed here.</p>
      <button className="button" onClick={() => setModalIsOpen(!modalIsopen)}>
        <FaPlus />
        &nbsp;&nbsp;&nbsp;Add Ordering Service
      </button>
      <Modal isOpen={modalIsopen}>
        <div className="modal-container">
          <div className="modal-heading-container">
            <h1 className="modal-heading">Create ordering service</h1>
            <button
              onClick={clickCrossHandler}
              className="cross-button"
            >
              <RxCross2 />
            </button>
          </div>
          <div className="modal-input-container">
            <div className="modal-input-field">
              <p className="input-heading">
                Organisation Name<span className="star">*</span>
              </p>
              <input
                className="input"
                type="text"
                placeholder="Organisation Name 1"
              />
            </div>
            <div className="modal-input-field">
              <p className="input-heading">
                No. of Ordering Nodes<span className="star">*</span>
              </p>
              <input
                className="input"
                type="text"
                placeholder="Organisation Name 1"
              />
            </div>
          </div>
          <div className="modal-input-container">
            <div className="modal-input-field">
              <p className="input-heading">Channel Name (Optional)</p>
              <input className="input" type="text" placeholder="Channel Name" />
            </div>
            <div className="modal-input-field">
              <p className="input-heading">
                Domain<span className="star">*</span>
              </p>
              <input
                className="input"
                type="text"
                placeholder="Organisation Name 2"
              />
            </div>
          </div>
          <div>
            <button className="advanced-config-btn" onClick={()=>setShowModalAdvOptions(!showModalAdvOptions)}>
              <h1 className="modal-heading">
                Advanced Configurations {showModalAdvOptions? <FaAngleUp className="angle"/>: <FaAngleDown className="angle" />}
                
              </h1>
            </button>
            {showModalAdvOptions && <div>
                <div className="modal-input-container">
              <div className="modal-input-field">
                <p className="input-heading">
                  Max Message Count<span className="star">*</span>
                </p>
                <input className="input" type="number" placeholder="E.g. 10" />
              </div>
              <div className="modal-input-field">
                <p className="input-heading">Absolute Max Bytes</p>
                <input
                  className="input"
                  type="number"
                  placeholder="E.g. 103872"
                />
              </div>
            </div>
            <div className="modal-input-container">
              <div className="modal-input-field">
                <p className="input-heading">
                  Preffered Max Bytes<span className="star">*</span>
                </p>
                <input
                  className="input"
                  type="text"
                  placeholder="E.g. 524288"
                />
              </div>
            </div>
            </div>}
          </div>
          <div className="btn-group-container">
            <button className="modal-btn btn-cancel" onClick={clickCrossHandler}>Cancel</button>
            <button className="modal-btn btn-submit" onClick={onClickSubmit}>Submit</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default OrderServiceForm;
