import React from "react";
import cash from "../assets/img/cash.png";

const Modal = ({ dataTarget }) => {
  return (
    <>
      <div
        class="modal fade"
        id={dataTarget}
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Want to Buy this?
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body text-center">
              <h3>Currently we believe in cash in hand.</h3>
              <img
                src={cash}
                alt="cash in hand"
                className="img-fluid my-3"
                style={{ height: "250px" }}
              />
              <br />
              Call : <i className="fa fa-phone"></i> +977-9851182929 <br /> to
              order or contact our salesman.
            </div>
            {/* <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
