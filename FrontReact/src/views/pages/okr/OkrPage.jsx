
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import OkrForm from '../../components/okr/OkrForm'


import "../../assets/styles/okr/OkrPage.css";



const OkrPage = () => {
  

  return (
     
   

    <div>
      <div className="container d-flex justify-content-center py-5">
        <Button type="button" className="btn sofka-color-btn py-3 px-4 fs-4">
          crear okr
        </Button>
      </div>

      <h1>Okr Page</h1>
      <OkrForm  />
    </div>
  );
};

export default OkrPage;
