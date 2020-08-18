import React from "react";
import "./style.css";

const CallRequest = () => {
  return (
    <>
      <div className="container-fluid pt-5 pb-5 call-request">
        <div className="row m-5">
          <div className="col-md-4">
            <h1 style={{ color: "white" }}>Request for Call Back</h1>
            <p style={{ color: "white" }}>
              If you have any query, just leave your number and we will contact
              you as soon as possible.
            </p>
          </div>
          <div className="col-md-8 align-self-center">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                event.target.name.value = "";
                event.target.number.value = "";
                alert(
                  "Thanks for contacting us. We will respond you as soon as possible."
                );
              }}
            >
              <div className="row mt-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control mx-auto"
                    placeholder="Your Name"
                    name="name"
                    required
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <input
                    type="text"
                    name="number"
                    className=" form-control mx-auto"
                    placeholder="Number (+923035226823)"
                    required
                  />
                </div>
              </div>

              <div className="text-center">
                <button type="submit" class="btn btn-theme mt-4 ml-auto">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default CallRequest;
