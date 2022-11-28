import React, { Fragment } from "react";

export const PlusInfo = () => {
  return (
    <Fragment>
      <div className="subscribe-section bg-with-black">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="subscribe-head">
                <h2>Necesitas una cotización personalizada</h2>
                <p>Registrate gratis y contactese con nosotros</p>
                <form className="form-section">
                  <input
                    placeholder="Escribe aqui..."
                    name="email"
                    type="email"
                  />
                  <input
                    value="Si. Yo quiero!"
                    name="subscribe"
                    type="submit"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PlusInfo;
