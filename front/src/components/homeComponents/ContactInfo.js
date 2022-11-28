import React, { Fragment } from "react";

const ContactInfo = () => {
  return (
    <Fragment>
      <div className="contactInfo container">
        <div className="row">
          <div className="col-12 col-md-4 contact-Box">
            <div className="box-info">
              <div className="info-image">
                <i class="fal fa-phone-alt"></i>
              </div>
              <h5>Linea de atención al cliente</h5>
              <p>Telefono: 444 44 44</p>
              <p>WhatsApp : 320 123 4567</p>
            </div>
          </div>
          <div className="col-12 col-md-4 contact-Box">
            <div className="box-info">
              <div className="info-image">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h5>Ubicación</h5>
              <p>Cra. 41 #35 Sur-14 Zona 9</p>
              <p>Envigado, Antioquia</p>
            </div>
          </div>
          <div className="col-12 col-md-4 contact-Box">
            <div className="box-info">
              <div className="info-image">
                <i className="fas fa-fax"></i>
              </div>
              <h5>Horario de atención</h5>
              <p>Lunes a Sabado</p>
              <p>7:30 am a 5:30 pm</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactInfo;
